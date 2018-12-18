import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createHistory, LocationProvider } from '@reach/router';

import Header from './Header';

const theme = {
  colorBlack: '#212121',
  colorDark: '#595959',
  colorGrey: '#767676',
  colorLight: '#efefef',
  fontSans:
    'system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
};

const GlobalStyle = createGlobalStyle`
  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ::-moz-selection {
    background-color: ${props => props.theme.colorDark};
    color: white;
  }
  ::selection {
    background-color: ${props => props.theme.colorDark};
    color: white;
  }

  :root {
    font-size: 10px;
  }

  body {
    font-family: ${props => props.theme.fontSans};
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${props => props.theme.colorDark};
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    margin: 0;
  }

  figure {
    margin: 0;
  }

  img {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 128rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;

    @media (min-width: 768px) {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 300ms;
  }

  #nprogress {
    .bar {
      background: #E12D39 !important;
    }

    .spinner {
      top: 2.1rem !important;
    }

    .spinner-icon {
      border-top-color: #E12D39 !important;
      border-left-color: #E12D39 !important;
    }
  }
`;

const StyledMain = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (width: 768px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.history = createHistory(window);
  }

  componentDidMount() {
    this.props.fetchData();
    this.subscribeOnHistoryUpdates();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoading !== this.props.isLoading)
      this.updateLoader(this.props.isLoading);
  }

  updateLoader(shouldShow) {
    if (shouldShow) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }

  subscribeOnHistoryUpdates() {
    this.history.listen(location => {
      switch (location.action) {
        case 'PUSH':
          window.scrollTo(0, 0);
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LocationProvider history={this.history}>
          <GlobalStyle />
          <Header />
          <StyledMain>{this.props.children}</StyledMain>
        </LocationProvider>
      </ThemeProvider>
    );
  }
}

export default App;
