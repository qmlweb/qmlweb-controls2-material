import QtQuick 2.0

Rectangle {
  color: "transparent"
  height: parent.orientation == Qt.Vertical ? parent.height : 20
  width: parent.orientation == Qt.Vertical ? 20 : parent.width
  anchors {
    bottom: parent.bottom
    right: parent.right
  }
}
