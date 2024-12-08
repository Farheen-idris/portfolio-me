import { FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Footer from "../components/sections/Footer";

function Blogs() {
  const navigate = useNavigate();
  const { theme, switchTheme } = useContext(AppContext);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />
        {/* <div className="md:max-w-[1200px] mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950"> */}
        <section
          id="hero"
          className="pb-10 pt-10 sm:pt-15 md:pt-10 flex px-6 lg:px-10"
        >
          <div className="self-center">
            <div className=" text-5xl justify-center font-bold gap-4 lg:w-[100%] text-zinc-900 dark:text-zinc-100">
              Client-Side Rendering (CSR) vs Server-Side Rendering (SSR):
              <span className="text-red-800 dark:text-red-500">
                How They Handle Data and Impact Performance
              </span>
            </div>
            <br />
            <div className="flex text-4xl justify-left font-bold lg:w-[80%] text-zinc-900 dark:text-zinc-100 ">
              CSR:
            </div>

            <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
              Client-Side Rendering (CSR) is a web rendering strategy where the
              content of a webpage is primarily generated in the browser using
              JavaScript. Instead of receiving fully-rendered HTML from the
              server, the browser gets a minimal HTML document along with
              JavaScript files that dynamically build the user interface (UI) on
              the client side.
              <br />
              In CSR, the server sends a minimal HTML document along with
              JavaScript files to the client. The JavaScript code is responsible
              for fetching data from an API and manipulating the Document Object
              Model (DOM) to update the user interface.
            </div>
            <br />
            <div className="lg:w-[100%] text-zinc-900 dark:text-zinc-100 text-left text-2xl justify-left font-bold gap-4">
              How CSR Works: 
              <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                The browser requests a page from the server.
                <br />
                The server responds with a basic HTML file and necessary
                JavaScript files.
                <br />
                The browser downloads and executes the JavaScript, which fetches
                additional data (if necessary) and constructs the page content
                in the browser.
                <br />
                The user sees the content only after the JavaScript is executed.
                <br />
              </div>
              <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                <span className="text-red-800 dark:text-red-500">
                  Example of CSR:
                </span>{" "}
                Consider a social media feed that displays a list of posts. With
                CSR, the initial HTML and JavaScript are sent to the client. The
                JavaScript code then retrieves the post data from an API and
                dynamically renders the posts in the user’s browser.
              </div>
              <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                <span className="text-red-800 dark:text-red-500">
                  Advantages of CSR:{" "}
                </span>
                Rich Interactivity: Since the rendering happens on the client
                side, CSR allows for highly interactive user experiences and
                real-time updates without refreshing the page. Scalability:
                Offloads the rendering load to the client, which helps in
                scaling applications with numerous users. Disadvantages of CSR:
                Slow Initial Load: Users may experience slower load times since
                the page content is constructed after downloading and running
                the JavaScript files. SEO Limitations: Search engines may not
                index content properly since the full page is not available as
                raw HTML on the initial server response.
              </div>
              <br />
              <div className="text-4xl justify-center font-bold ">SSR:</div>
              <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                Server-Side Rendering (SSR) is the process of rendering web
                pages on the server and sending fully rendered HTML to the
                client. This approach allows users to see content faster because
                the server sends a pre-rendered page.
              </div>
              <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                SSR happens on the server. If you use fetch function then it
                will work on client. But if you use getServerSideProps or
                getStatisSideProps then it will work on server. You can read
                from the file system, fetch public API or query the database,
                whatever you do in getStatisSideProps, getServerSideProps will
                run on the server, before returning the response.
              </div>
            </div>
            <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
              <span className="text-red-800 dark:text-red-500">
                Example of SSR:
              </span>{" "}
              Imagine an e-commerce website with various product listings. With
              SSR, when a user visits a product page, the server renders the
              complete HTML, including the product information, images, and
              relevant data. This ensures that the user sees the entire page
              immediately, regardless of their device’s processing power or
              internet speed.
            </div>
            <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
              <span className="text-red-800 dark:text-red-500">
                {" "}
                Pros of CSR:
              </span>{" "}
              Reduced Server Load: The server only needs to serve static assets
              (HTML, CSS, JS), reducing server workload. Rich Interactivity: CSR
              allows for more dynamic and interactive user experiences. Easier
              Development: Simpler state management since everything happens on
              the client side. Cons of CSR: Slower Initial Load: Users must wait
              for the JavaScript to download and execute before seeing any
              content. Poor SEO: Search engines may struggle to index content if
              it's only rendered on the client side. Performance Issues on Slow
              Devices: CSR can be slower on devices with limited processing
              power.
            </div>
            <div className="text-left leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
            <div className="text-red-800 dark:text-red-500"> Conclusion:
            </div>
             Both SSR and CSR have their benefits and drawbacks, and
              the decision of which method to use depends on the specific needs
              of the website. For websites with a lot of static content and a
              focus on SEO, SSR is generally the better option. For websites
              with a lot of dynamic content and a focus on user experience, CSR
              is often the better choice. Regardless of the method used, it is
              important to consider the performance, SEO, and security
              implications of each approach.
            </div>
            <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
            <Footer theme={theme} />
          </div>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Blogs;
