import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

import { CatppuccinPalettes } from './palettes';

/**
 * Initialization data for the catppuccin_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'catppuccin_jupyterlab:plugin',
  description: '📊 Soothing pastel theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, manager: IThemeManager, settingRegistry: ISettingRegistry | null) => {
    const style = 'catppuccin_jupyterlab/index.css';
    const palettes = new CatppuccinPalettes();

    let brandColor = "mauve"
    let accentColor = "green"

    function loadSettings(settingRegistry: ISettingRegistry | null) {
      if (settingRegistry) {
        settingRegistry
          .load(plugin.id)
          .then(settings => {
            brandColor = settings.get('brandColor').composite as string;
            accentColor = settings.get('accentColor').composite as string;
            console.debug(`catppuccin_jupyterlab settings loaded. Brand color is '${brandColor}', Accent color is '${accentColor}'`);
          })
          .catch(reason => {
            console.error('Failed to load settings for catppuccin_jupyterlab.', reason);
          });
      }
    }

    loadSettings(settingRegistry);

    manager.register({
      name: 'Catppuccin Latte',
      isLight: true,
      load: () => {
        palettes.setColorsLatte();
        palettes.setConfigColors(brandColor, accentColor);
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Frappé',
      isLight: false,
      load: () => {
        palettes.setColorsFrappe();
        palettes.setConfigColors(brandColor, accentColor);
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Macchiato',
      isLight: false,
      load: () => {
        palettes.setColorsMacchiato();
        palettes.setConfigColors(brandColor, accentColor);
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });

    manager.register({
      name: 'Catppuccin Mocha',
      isLight: false,
      load: () => {
        palettes.setColorsMocha();
        palettes.setConfigColors(brandColor, accentColor);
        return manager.loadCSS(style)
      },
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
