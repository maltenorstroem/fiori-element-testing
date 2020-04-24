// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/data-input';
import '@furo/form';
import '../furo/furo-link-form.js';
import './tree-navigationnode-repeat.js';

/**
 * Item of the navigationtree
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class TreeNavigationnodeForm extends FBP(LitElement) {
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
      Theme.getThemeForComponent('FormBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host(.in-repeater) {
          border-bottom: 1px solid var(--separator, #fafafa);
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
          <!-- field: secondary_text -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.secondary_text)"
            ƒ-focus="--focused"
          ></furo-data-text-input>

          <!-- field: description -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.description)"
          ></furo-data-text-input>

          <!-- field: icon -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.icon)"
          ></furo-data-text-input>

          <!-- field: panel -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.panel)"
          ></furo-data-text-input>

          <!-- field: key_words -->
          <furo-data-text-input
            condensed
            double
            ƒ-bind-data="--data(*.key_words)"
          ></furo-data-text-input>

          <!-- field: has_error -->
          <furo-data-checkbox-input
            condensed
            double
            ƒ-bind-data="--data(*.has_error)"
          ></furo-data-checkbox-input>

          <!-- field: open -->
          <furo-data-checkbox-input
            condensed
            double
            ƒ-bind-data="--data(*.open)"
          ></furo-data-checkbox-input>

          <!-- field: link -->
          <furo-link-form
            condensed
            full
            header-text="${i18n.t('form.tree.navigationnode.link.header.text')}"
            secondary-text="${i18n.t('form.tree.navigationnode.link.secondary.text')}"
            ƒ-bind-data="--data(*.link)"
          ></furo-link-form>

          <!-- field: is_group_label -->
          <furo-data-checkbox-input
            condensed
            double
            ƒ-bind-data="--data(*.is_group_label)"
          ></furo-data-checkbox-input>

          <!-- field: children -->
          <tree-navigationnode-repeat
            condensed
            double
            header-text="${i18n.t('form.tree.navigationnode.children.header.text')}"
            secondary-text="${i18n.t('form.tree.navigationnode.children.secondary.text')}"
            ƒ-bind-data="--data(*.children)"
          ></tree-navigationnode-repeat>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('tree-navigationnode-form', TreeNavigationnodeForm);
