// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/data-input';
import '@furo/form';

/**
 * Project description
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class ProjectProjectDisplay extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // Header text to label the form
      headerText: {
        type: String,
        attribute: 'header-text',
      },
      // Secondary text for a detailed description
      secondaryText: {
        type: String,
        attribute: 'secondary-text',
      },
    };
  }

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(data) {
    this._FBPTriggerWire('--data', data);
    this.field = data;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
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
      <!-- It is a good practice to set a description -->
      <furo-form
        header-text="${this.headerText ? this.headerText : ''}"
        secondary-text="${this.secondaryText ? this.secondaryText : ''}"
      >
        <!-- It is a good practice to set a description -->
        <furo-form-layouter four>
          <!-- field: start -->
          <furo-data-display
            condensed
            double
            ƒ-bind-data="--data(*.start)"
            ƒ-focus="--focused"
          ></furo-data-display>

          <!-- field: end -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.end)"></furo-data-display>

          <!-- field: description -->
          <furo-data-display
            condensed
            double
            ƒ-bind-data="--data(*.description)"
          ></furo-data-display>

          <!-- field: members -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.members)"></furo-data-display>

          <!-- field: cost_limit -->
          <furo-data-display
            condensed
            double
            ƒ-bind-data="--data(*.cost_limit)"
          ></furo-data-display>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('project-project-display', ProjectProjectDisplay);
