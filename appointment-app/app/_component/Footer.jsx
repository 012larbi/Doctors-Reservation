import React from 'react'
import { Button } from '@/components/ui/button'
function Footer() {
    return (
        <div>
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-start lg:gap-8">
                        <div className="text-teal-600">
                            <svg
                                className="h-8"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.41 10.384s7C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                            <div className="col-span-2">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Get the latest news!
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                                <form className="w-full">
                                    <label htmlFor="UserEmail" className="sr-only">
                                        Email
                                    </label>

                                    <div className="border border-gray-100 p-2 sm:flex sm:items-center sm:gap-4">
                                        <input
                                            type="email"
                                            id="UserEmail"
                                            placeholder="john@rhcp.com"
                                            className="w-full border-2 border-lime-300  p-2 focus:border-lime-600 rounded-xl focus:ring-transparent sm:text-sm"
                                        />

                                        <Button
                                            type="submit"
                                            className="mt-1 w-full bg-lime-600 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                        >
                                            Sign Up
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {["Services", "Company", "Helpful Links", "Legal", "Downloads"].map(
                                (title) => (
                                    <div key={title} className="col-span-2 sm:col-span-1">
                                        <p className="font-medium text-gray-900">{title}</p>
                                        <ul className="mt-6 space-y-4 text-sm">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    Example link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    Another link
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-gray-700 transition hover:opacity-75"
                                                >
                                                    Third link
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            )}

                            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                                {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map(
                                    (social) => (
                                        <li key={social}>
                                            <a
                                                href="#"
                                                className="text-gray-700 transition hover:opacity-75"
                                                aria-label={social}
                                            >
                                                <span className="sr-only">{social}</span>
                                                {social}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-8">
                        <div className="sm:flex sm:justify-between">
                            <p className="text-xs text-gray-500">
                                © 2022. Company Name. All rights reserved.
                            </p>

                            <ul className="mt-8 flex flex-wrap gap-4 text-xs sm:mt-0">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-500 transition hover:opacity-75"
                                    >
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
