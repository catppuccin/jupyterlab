import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the catppuccin_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'catppuccin_jupyterlab:plugin',
  description: '📊 Soothing pastel theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension catppuccin_jupyterlab is activated!');
    const style = 'catppuccin_jupyterlab/index.css';

    manager.register({
      name: 'catppuccin_jupyterlab',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
