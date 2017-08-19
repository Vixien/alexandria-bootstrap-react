<template>
  <div id="root" class="wrapper">
    <div id="app">
      Are you a friend, or foe?
    </div>
  </div>
</template>

<style >
  * {
    box-sizing: border-box;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  html, body {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Source Sans Pro, Helvetica, sans-serif;
    background-color: #005fab;

    .ui-menu.has-secondary-text {
      min-width: 8rem;
    }
  }

  .wrapper {
    height: 100%;
    width: 100%;
  }

  #root {
    max-width: 1024px;
    max-height: 768px;
    text-align: initial;
  }

  #app {
    background-color: white;
    /*box-shadow: -7px -7px 0px #1f88dc;*/
    height: 100%;
    position: relative;

    .ui-tab-header-item-text, .ui-button {
      text-transform: none;
    }

    .ui-menu-option__content, .ui-menu-option:not(.is-divider) {
      height: 2rem;
    }

    .editor {
      height: 100%;
    }

    .main, .editor {
      height: 100%;

      & > .ui-tabs__header {
        height: 6%;
      }

      .ui-tabs__body {
        height: 94%;
        padding: 0;
      }
    }

    .output-sections.ui-tab, .output-sections > .ui-tabs__body {
      overflow-x: hidden;
      overflow-y: auto;
    }

    .ui-tabs {
      margin-bottom: 0;

      .ui-tabs__body {
        margin: 0;
      }

      .ui-tabs__header-items, .ui-tab-header-item {
        height: 100%;
        padding: 0;
        min-width: initial;
      }
    }
  }

  @media (min-width: 640px) {
    #app {
      & > .editor, & > .main {
        position: absolute;
        width: 50%;
        bottom: 0;
        top: 0;
      }

      & > .main {
        padding-left: 3px;
        background-color: #005fab;
        right: 0;
      }
    }
  }

  .ui-collapsible__header {
    .ui-collapsible__header-content {
      width: 100%;
    }

    svg {
      display: none;
      float: right;
    }

    &[aria-expanded="false"] svg.icon-chevron-up {
      display: inline-block;
    }

    &[aria-expanded="true"] svg.icon-chevron-down {
      display: inline-block;
    }
  }

  svg {
    width: 1em;
    height: 1em;
  }

  .ui-tab, .ui-tab .editor {
    height: 100%;
  }

  .panel--inset {
    box-shadow: inset 0px 0px 2px 1px rgba(10, 10, 10, 0.1);
  }

  .raised {
    border: none;
    box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
  }

  .ui-collapsible__body-wrapper {
    height: initial !important;
  }

  .row.space-around {
    display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    justify-content: space-around;
  }

  table {
    width: 100%;

    & > caption + thead > tr:first-child > td, .table > caption + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th, .table > thead:first-child > tr:first-child > td, .table > thead:first-child > tr:first-child > th {
      border-top: 0;
    }

    & > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
      padding: 3px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #ddd;
    }
  }


</style>
