import QtQuick 2.0
import QtQuick.Controls 2.0
import "qrc:/.styles/Material/components"

Button {
  property var menu: parent.parent.menus[index]
  property bool opened: menu.opened
  text: menu.title
  padding: 10

  contentItem: Text {
    anchors.centerIn: parent
    text: parent.$formatLabel(parent.text.toUpperCase(), parent.display, parent.icon)
    color: parent.enabled ? "black" : "grey"
    font.size: 14
    font.weight: 500
    font.family: "Roboto"
    horizontalAlignment: Text.AlignHCenter
  }

  background: Rectangle {
    color: opened ? "#d3d3d3" : "transparent"
    clip: true
    RippleEffect {
      id: ripple
      color: Material.Grey
    }
  }

  Connections {
    target: menu
    onOpenedChanged: {
      if (menu.opened) {
        ripple.start();
      }
    }
  }
}
