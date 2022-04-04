import QtQuick 2.0

Rectangle {
  color: "lightgrey"
  opacity: parent.active ? 1 : 0
  radius: 25
  implicitWidth: parent.orientation == Qt.Vertical ? 20 : null
  implicitHeight: parent.orientation == Qt.Horizontal ? 20 : null
  Behavior on opacity {
    NumberAnimation { duration: 300 }
  }
}
