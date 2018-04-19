import { assert } from "chai"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router"

import Main from "./Main"

describe('App module', function() {
    describe('<Main/>', function() {
        it('should render without error', function() {
          const context = {}
          ReactDOMServer.renderToString(
            <StaticRouter location="/" context={context}>
              <Main/>
            </StaticRouter>
          )
        });
    });
});
