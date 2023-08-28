import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { CatppuccinPalettes } from './palettes';

/**
 * Initialization data for the catppuccin_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'catppuccin_jupyterlab:plugin',
  description: '📊 Soothing pastel theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'catppuccin_jupyterlab/index.css';
    const palettes = new CatppuccinPalettes();

    manager.register({
      name: 'Catppuccin Latte',
      isLight: true,
      load: () => {
        palettes.setColorsLatte();
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Frappé',
      isLight: false,
      load: () => {
        palettes.setColorsFrappe();
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Macchiato',
      isLight: false,
      load: () => {
        palettes.setColorsMacchiato();
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Mocha',
      isLight: false,
      load: () => {
        palettes.setColorsMocha();
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
