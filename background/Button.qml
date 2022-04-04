import QtQuick 2.0

Rectangle {
  id: buttonBackground
  color: parent.enabled ? parent.Material.primary : "#E0E0E0"
  radius: 4
  clip: true

  Component.onCompleted: {
    buttonBackground.dom.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px";
    buttonBackground.dom.style.cursor = "pointer";
  }

  // Ripple
  Rectangle {
    id: ripple
    color: "white"
    anchors.centerIn: parent
    radius: 999
    width: 1
    height: 1
    opacity: 0
  }
  NumberAnimation {
    id: rippleAnimationPart1
    target: ripple
    properties: "height,width"
    from: 0
    to: Math.max(buttonBackground.width, buttonBackground.height) * 1.25
    onFinished: rippleAnimationPart2.start()
  }
  NumberAnimation {
    id: rippleAnimationPart2
    target: ripple
    properties: "opacity"
    from: 0.32
    to: 0
  }
  Connections {
    target: buttonBackground.parent
    onDownChanged: {
      if (buttonBackground.parent.down) {
        ripple.opacity = 0.32;
        ripple.height = ripple.width = 1;
        rippleAnimationPart1.start();
      }
    }
  }
}
