const materialColors = {
  Red: new QmlWeb.QColor("#F44336"),
  Pink: new QmlWeb.QColor("#E91E63"),
  Purple: new QmlWeb.QColor("#9C27B0"),
  DeepPurple: new QmlWeb.QColor("#673AB7"),
  Indigo: new QmlWeb.QColor("#3F51B5"),
  Blue: new QmlWeb.QColor("#21963F"),
  LightBlue: new QmlWeb.QColor("#03A9F4"),
  Cyan: new QmlWeb.QColor("#00BCD4"),
  Teal: new QmlWeb.QColor("#009688"),
  Green: new QmlWeb.QColor("#4CAF50"),
  LightGreen: new QmlWeb.QColor("#88C34A"),
  Lime: new QmlWeb.QColor("#CDDC39"),
  Yellow: new QmlWeb.QColor("#FFEB3B"),
  Amber: new QmlWeb.QColor("#FFC107"),
  Orange: new QmlWeb.QColor("#FF9800"),
  DeepOrange: new QmlWeb.QColor("#FF5722"),
  Brown: new QmlWeb.QColor("#795548"),
  Grey: new QmlWeb.QColor("#9E9E9E"),
  BlueGrey: new QmlWeb.QColor("#607D8B")
};

function prepareRoboto() {
  if (!window._roboto_initialized) {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "http://fonts.cdnfonts.com/css/roboto");
    document.head.append(link);
    window._roboto_initialized = true;
  }
}

class QtQuick_Controls_Material {
  static getAttachedObject() {
    if (!this.$Material) {
      prepareRoboto();
      this.$Material = new QmlWeb.QObject(this);
      this.$Material.Light = 0;
      this.$Material.Dark = 1;
      this.$Material.System = 2;
      for (const color in materialColors) {
        this.$Material[color] = materialColors[color];
      }
      QmlWeb.createProperties(this.$Material, {
        accent: { type: "color", initialValue: materialColors.Pink },
        background: { type: "color", initialValue: materialColors.Teal },
        elevation: { type: "int", initialValue: null },
        foreground: { type: "color", initialValue: "transparent" },
        primary: { type: "color", initialValue: materialColors.Indigo },
        theme: "enum"
      });
      QmlWeb.createProperties(this, {
        Material: { type: "QtObject", initialValue: this.$Material, readOnly: true }
      });
    }
    return this.$Material;
  }
}
