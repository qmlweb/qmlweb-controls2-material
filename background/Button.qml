import QtQuick 2.0
import "qrc:/.styles/Material/components"

Rectangle {
  id: buttonBackground
  color: parent.enabled ? parent.Material.background : "#E0E0E0"
  radius: 4
  clip: true

  Component.onCompleted: {
    buttonBackground.dom.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px";
  }

  RippleEffect {
    id: ripple
  }
  
  Connections {
    target: buttonBackground.parent
    onDownChanged: {
      if (buttonBackground.parent.down) {
        ripple.start();
      }
    }
  }
}
