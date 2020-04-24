import {LitElement, html, css} from 'lit-element';
import {i18n, Theme} from '@furo/framework/src/furo.js';
import {FBP} from '@furo/fbp';

import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/form';
import '@furo/input';
import '@furo/app/src/furo-card.js';
import '@furo/form/src/furo-form.js';
import '@furo/input/src/furo-icon-button.js';
import '@furo/notification/src/furo-snackbar.js';
import '@ui5/webcomponents/dist/Timeline.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/TimelineItem.js';
import "@ui5/webcomponents-fiori/dist/ShellBar";

/**
 * `view-dashboard`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-view-dashboard
 * @appliesMixin FBP
 */
class ViewDashboard extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean},
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: block;
          height: 100%;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        .content {
          padding: var(--spacing-s);
          background-color: var(--background);
          color: var(--on-surface);
        }

        furo-card {
          margin: 0 var(--spacing) var(--spacing) 0;
          width: 280px;
          float: left;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <ui5-shellbar
          primary-title="Corporate Portal"
          secondary-title="secondary title"
          logo="../../../assets/images/sap-logo-svg.svg"
          show-co-pilot
          show-product-switch
          show-notifications
          notification-count="22"
        >
          <ui5-avatar slot="profile" image="../../../assets/images/avatars/woman_avatar_5.png"></ui5-avatar>
        </ui5-shellbar>
        <div flex scroll class="content">
          <furo-card class="selected">

            <h1>Timeline</h1>

            <ui5-timeline>
                <ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="" item-name="John Smith" item-name-clickable></ui5-timeline-item>
                <ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="">
                    <div>MR SOF02 2.43</div>
                </ui5-timeline-item>
                <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
                    <div>Online meeting</div>
                </ui5-timeline-item>
            </ui5-timeline>
          </furo-card>

          <furo-card disabled>
            <img src="assets/images/hamburg.jpg" slot="media" alt="" />
            <h1>App-flow...</h1>
            <p>Routing example with app-flow</p>
            <furo-app-flow event="form-requested" ƒ-trigger="--form"></furo-app-flow>
            <furo-horizontal-flex slot="action">
              <ui5-button design="Positive" ƒ-focus="--pageActivated" @-click="--form">register</ui5-button>
            </furo-horizontal-flex>
          </furo-card>

          <furo-card>
            <h1>Simulate unauthorized</h1>
            <p>Click on the button to emmit a unauthorized event.</p>
            <p>
              The unathorized event is catched in the app-shell and triggers an app-flow event which
              causses the router to navigate to the <strong>/auth</strong> page..
            </p>
            <furo-horizontal-flex slot="action">
              <ui5-button design="Negative" @-click="^^unauthorized">Unauth</ui5-button>
            </furo-horizontal-flex>
          </furo-card>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('view-dashboard', ViewDashboard);
