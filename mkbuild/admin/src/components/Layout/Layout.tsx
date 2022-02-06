import { Fragment } from "react";
import { matchPath, NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

import { NavigationLink } from "@mkbuild/app";
import navigationPaths from "@mkbuild/app/paths";
import { useUiContext } from "@mkbuild/contexts/UiContext";

import { classNames } from "@mkbuild/utils/component-helpers";

export type DashboardLayoutProps = {
  user?: Partial<{
    name: string;
    email: string;
    imageUrl: string;
  }> | null;
  navigation: NavigationLink[];
  userNavigation: NavigationLink[] & {
    component?: null;
  };
  children?: React.ReactNode;
};

export const DashboardLayout = ({
  user,
  navigation,
  userNavigation,
  children,
}: DashboardLayoutProps) => {
  const location = useLocation();
  const activePath = navigationPaths.find(
    (navigationPath) =>
      navigationPath.path && matchPath(navigationPath.path, location.pathname)
  );
  const { uiHeader, currentBreadcrumLink, setCurrentBreadcrumLink } =
    useUiContext();
  const { breadcrumLinks } = uiHeader;

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }: any) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => {
                          const isActive =
                            activePath && activePath.key === item.key;
                          return (
                            item.href && (
                              <NavLink
                                key={item.key}
                                to={item.href}
                                className={classNames(
                                  isActive
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "px-3 py-2 rounded-md text-sm font-medium"
                                )}
                                aria-current={isActive ? "page" : undefined}
                              >
                                {item.title}
                              </NavLink>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    {user && (
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}

                        <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              {user.imageUrl && (
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              )}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.key}>
                                  {({ active }: any) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.title}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    )}
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.key}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.title}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  {user && (
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.key}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.title}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              {(typeof uiHeader?.header === "string" && (
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  {uiHeader?.header}
                </h2>
              )) ||
                uiHeader?.header}
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                {uiHeader?.subHeader}
                {breadcrumLinks && (
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    {breadcrumLinks.map((breadcrumLink, index) => {
                      const isLink = !breadcrumLink.selectedWhen();
                      const isHidden =
                        typeof breadcrumLink.showIf !== "undefined" &&
                        !breadcrumLink.showIf!();
                      return (
                        !isHidden && (
                          <Fragment key={breadcrumLink.id}>
                            {(isLink && (
                              <Link
                                to={breadcrumLink.href}
                                onClick={() =>
                                  setCurrentBreadcrumLink({
                                    breadcrumLink,
                                    index,
                                  })
                                }
                              >
                                {breadcrumLink.title}
                              </Link>
                            )) ||
                              breadcrumLink.title}
                            {index !== currentBreadcrumLink?.index && (
                              <div style={{ userSelect: "none" }}>
                                &nbsp;&nbsp;{">"}&nbsp;&nbsp;
                              </div>
                            )}
                          </Fragment>
                        )
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              {Array.isArray(uiHeader.actions) &&
                uiHeader.actions.map((action) => {
                  const { icon, ...buttonProps } = action;
                  const Icon = icon;
                  return (
                    action.id && (
                      <span className="hidden sm:block ml-3" key={action.id}>
                        <button
                          type="button"
                          {...buttonProps}
                          className={classNames(
                            "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium",
                            action.className
                          )}
                        >
                          {Icon && (
                            <Icon
                              className="-ml-1 mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          {action.children}
                        </button>
                      </span>
                    )
                  );
                })}

              {/* Dropdown */}
              <Menu as="span" className="ml-3 relative sm:hidden">
                <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  More
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          View
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content 
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            /End replace */}
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
