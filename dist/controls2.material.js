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

QmlWeb.newControls2Style("Material", QtQuick_Controls_Material, {"background/Popup.qml":["toplevel",[["qmlimport","QtQuick",2,"",true]],["qmlelem","Rectangle",null,[["qmlprop","color",["stat",["string","white"]],"\"white\"\n  "],["qmlprop",["dot","border","width"],["stat",["num",1]],"1\n  "],["qmlprop",["dot","border","color"],["stat",["string","gray"]],"\"gray\"\n"]]]],"background/ScrollBar.qml":["toplevel",[["qmlimport","QtQuick",2,"",true]],["qmlelem","Rectangle",null,[["qmlprop","color",["stat",["string","transparent"]],"\"transparent\"\n  "],["qmlprop","height",["stat",["conditional",["binary","==",["dot",["name","parent"],"orientation"],["dot",["name","Qt"],"Vertical"]],["dot",["name","parent"],"height"],["num",20]]],"parent.orientation == Qt.Vertical ? parent.height : 20\n  "],["qmlprop","width",["stat",["conditional",["binary","==",["dot",["name","parent"],"orientation"],["dot",["name","Qt"],"Vertical"]],["num",20],["dot",["name","parent"],"width"]]],"parent.orientation == Qt.Vertical ? 20 : parent.width\n  "],["qmlobj","anchors",[["qmlprop","bottom",["stat",["dot",["name","parent"],"bottom"]],"parent.bottom\n    "],["qmlprop","right",["stat",["dot",["name","parent"],"right"]],"parent.right\n  "]]]]]],"content/Button.qml":["toplevel",[["qmlimport","QtQuick",2,"",true]],["qmlelem","Text",null,[["qmlprop",["dot","anchors","centerIn"],["stat",["name","parent"]],"parent\n  "],["qmlprop","text",["stat",["call",["dot",["name","parent"],"$formatLabel"],[["call",["dot",["dot",["name","parent"],"text"],"toUpperCase"],[]]]]],"parent.$formatLabel(parent.text.toUpperCase())\n  "],["qmlprop","color",["stat",["conditional",["dot",["name","parent"],"enabled"],["string","white"],["string","grey"]]],"parent.enabled ? \"white\" : \"grey\"\n  "],["qmlprop",["dot","font","size"],["stat",["num",14]],"14\n  "],["qmlprop",["dot","font","weight"],["stat",["num",500]],"500\n  "],["qmlprop",["dot","font","family"],["stat",["string","Roboto"]],"\"Roboto\"\n  "],["qmlprop","horizontalAlignment",["stat",["dot",["name","Text"],"AlignHCenter"]],"Text.AlignHCenter\n"]]]],"content/ScrollBar.qml":["toplevel",[["qmlimport","QtQuick",2,"",true]],["qmlelem","Rectangle",null,[["qmlprop","color",["stat",["string","lightgrey"]],"\"lightgrey\"\n  "],["qmlprop","opacity",["stat",["conditional",["dot",["name","parent"],"active"],["num",1],["num",0]]],"parent.active ? 1 : 0\n  "],["qmlprop","radius",["stat",["num",25]],"25\n  "],["qmlprop","implicitWidth",["stat",["conditional",["binary","==",["dot",["name","parent"],"orientation"],["dot",["name","Qt"],"Vertical"]],["num",20],["name","null"]]],"parent.orientation == Qt.Vertical ? 20 : null\n  "],["qmlprop","implicitHeight",["stat",["conditional",["binary","==",["dot",["name","parent"],"orientation"],["dot",["name","Qt"],"Horizontal"]],["num",20],["name","null"]]],"parent.orientation == Qt.Horizontal ? 20 : null\n  "],["qmlelem","Behavior","opacity",[["qmlelem","NumberAnimation",null,[["qmlprop","duration",["stat",["num",300]],"300 "]]]]]]]],"background/Button.qml":["toplevel",[["qmlimport","QtQuick",2,"",true]],["qmlelem","Rectangle",null,[["qmlprop","id",["stat",["name","buttonBackground"]],"buttonBackground\n  "],["qmlprop","color",["stat",["conditional",["dot",["name","parent"],"enabled"],["dot",["dot",["name","parent"],"Material"],"primary"],["string","#E0E0E0"]]],"parent.enabled ? parent.Material.primary : \"#E0E0E0\"\n  "],["qmlprop","radius",["stat",["num",4]],"4\n  "],["qmlprop","clip",["stat",["name","true"]],"true\n\n  "],["qmlprop",["dot","Component","onCompleted"],["block",[["stat",["assign",true,["dot",["dot",["dot",["name","buttonBackground"],"dom"],"style"],"boxShadow"],["string","rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"]]],["stat",["assign",true,["dot",["dot",["dot",["name","buttonBackground"],"dom"],"style"],"cursor"],["string","pointer"]]]]],"{\n    buttonBackground.dom.style.boxShadow = \"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px\";\n    buttonBackground.dom.style.cursor = \"pointer\";\n  }\n\n  // Ripple\n  "],["qmlelem","Rectangle",null,[["qmlprop","id",["stat",["name","ripple"]],"ripple\n    "],["qmlprop","color",["stat",["string","white"]],"\"white\"\n    "],["qmlprop",["dot","anchors","centerIn"],["stat",["name","parent"]],"parent\n    "],["qmlprop","radius",["stat",["num",999]],"999\n    "],["qmlprop","width",["stat",["num",1]],"1\n    "],["qmlprop","height",["stat",["num",1]],"1\n    "],["qmlprop","opacity",["stat",["num",0]],"0\n  "]]],["qmlelem","NumberAnimation",null,[["qmlprop","id",["stat",["name","rippleAnimationPart1"]],"rippleAnimationPart1\n    "],["qmlprop","target",["stat",["name","ripple"]],"ripple\n    "],["qmlprop","properties",["stat",["string","height,width"]],"\"height,width\"\n    "],["qmlprop","from",["stat",["num",0]],"0\n    "],["qmlprop","to",["stat",["binary","*",["call",["dot",["name","Math"],"max"],[["dot",["name","buttonBackground"],"width"],["dot",["name","buttonBackground"],"height"]]],["num",1.25]]],"Math.max(buttonBackground.width, buttonBackground.height) * 1.25\n    "],["qmlprop","onFinished",["stat",["call",["dot",["name","rippleAnimationPart2"],"start"],[]]],"rippleAnimationPart2.start()\n  "]]],["qmlelem","NumberAnimation",null,[["qmlprop","id",["stat",["name","rippleAnimationPart2"]],"rippleAnimationPart2\n    "],["qmlprop","target",["stat",["name","ripple"]],"ripple\n    "],["qmlprop","properties",["stat",["string","opacity"]],"\"opacity\"\n    "],["qmlprop","from",["stat",["num",0.32]],"0.32\n    "],["qmlprop","to",["stat",["num",0]],"0\n  "]]],["qmlelem","Connections",null,[["qmlprop","target",["stat",["dot",["name","buttonBackground"],"parent"]],"buttonBackground.parent\n    "],["qmlprop","onDownChanged",["block",[["if",["dot",["dot",["name","buttonBackground"],"parent"],"down"],["block",[["stat",["assign",true,["dot",["name","ripple"],"opacity"],["num",0.32]]],["stat",["assign",true,["dot",["name","ripple"],"height"],["assign",true,["dot",["name","ripple"],"width"],["num",1]]]],["stat",["call",["dot",["name","rippleAnimationPart1"],"start"],[]]]]],null]]],"{\n      if (buttonBackground.parent.down) {\n        ripple.opacity = 0.32;\n        ripple.height = ripple.width = 1;\n        rippleAnimationPart1.start();\n      }\n    }\n  "]]]]]]});