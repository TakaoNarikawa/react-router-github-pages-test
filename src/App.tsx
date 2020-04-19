import { Layout } from "antd";
import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import pages from "src/Pages";
import styled from "styled-components";
import { BASE, FOOTER_HEIGHT, HEADER_HEIGHT, PAGE_SIDE_PADDING, X_LARGE } from "./utils/space";

const { Content } = Layout;
const ContentWrapper = styled(Content)`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${X_LARGE} - ${BASE});
  margin-top: ${HEADER_HEIGHT};
  padding: 0px ${PAGE_SIDE_PADDING};
`;
const PagePadding = styled.div`
  padding: ${X_LARGE} 0px;
`;

function Routes() {
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <div>pathname:{pathname}</div>
      {pages.map(({ path, noPadding, View }, i) => (
        <div>{path}</div>
      ))}

      <Switch>
        {pages.map(({ path, noPadding, View }, i) => (
          <Route key={i} exact path={path}>
            {noPadding ? (
              <View />
            ) : (
              <PagePadding>
                <View />
              </PagePadding>
            )}
          </Route>
        ))}
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      react-router-github-pages-test
      <Router>
        <ContentWrapper className="site-layout">
          <Routes />
        </ContentWrapper>
      </Router>
    </>
  );
}

export default App;
