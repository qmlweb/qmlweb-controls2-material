import QtQuick 2.0

Rectangle {
  id: ripple
  color: "white"
  anchors.centerIn: parent
  radius: 999
  width: 1
  height: 1
  opacity: 0

  function start() {
    ripple.opacity = 0.32;
    ripple.height = ripple.width = 1;
    rippleAnimationPart1.start();
  }

  NumberAnimation {
    id: rippleAnimationPart1
    target: ripple
    properties: "height,width"
    from: 0
    to: Math.max(ripple.parent.width, ripple.parent.height) * 1.25
    onFinished: rippleAnimationPart2.start()
  }

  NumberAnimation {
    id: rippleAnimationPart2
    target: ripple
    properties: "opacity"
    from: 0.32
    to: 0
  }
}
