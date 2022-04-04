import QtQuick 2.0

Text {
  anchors.centerIn: parent
  text: parent.$formatLabel(parent.text.toUpperCase(), parent.display, parent.icon)
  color: parent.enabled ? "white" : "grey"
  font.size: 14
  font.weight: 500
  font.family: "Roboto"
  horizontalAlignment: Text.AlignHCenter
}
