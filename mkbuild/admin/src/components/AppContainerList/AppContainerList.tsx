import { Link } from "react-router-dom";
import { DocumentDownloadIcon, LinkIcon } from "@heroicons/react/solid";
import { useApplicationContext } from "@mkbuild/contexts/ApplicationContext";
import { AppContainer } from "@mkbuild/lib/src/services/appContainers";

export type AppContainerListProps = {
  data: AppContainer[];
};

import "./AppContainerList.css";

export const AppContainerList = (props: AppContainerListProps) => {
  const { data: appContainers } = props;
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    URL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appContainers.map((appContainer) => (
                  <tr key={appContainer.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          /> */}
                          <div className="appContainerImage" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {appContainer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {appContainer.dependsOf}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <div className="text-sm text-gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.department}
                      </div> */}
                      <a
                        href={appContainer.url}
                        className="text-indigo-600 hover:text-indigo-900"
                        target="_blank"
                      >
                        <span className="inline-flex items-center">
                          {appContainer.type === "web" && (
                            <>
                              <LinkIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              {appContainer.url}
                            </>
                          )}
                          {appContainer.type !== "web" && (
                            <>
                              <DocumentDownloadIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              Download{" "}
                              {appContainer.type === "android" ? "apk" : "ipa"}{" "}
                              file
                            </>
                          )}
                        </span>
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {appContainer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/${appContainer.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContainerList;
