import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, } from 'react-native-maps';
import { getMiddleCoordinates } from '../lib/helpers';
export const SubCircleMarkers = (props) => {
    const middleCoordinates = getMiddleCoordinates(props.polygon.coordinates);
    return (<>
            {middleCoordinates.map((coordinate, coordIndex) => (<Marker key={coordIndex} identifier={coordIndex.toString()} coordinate={coordinate} anchor={{ x: 0.5, y: 0.5 }} draggable={true} onDragStart={props.onDragStart(coordIndex)} onDrag={props.onDrag(coordIndex)} onDragEnd={props.onDragEnd(coordIndex)} tracksViewChanges={true}>
                    <View style={[
                styles.subCircleMarker,
                {
                    borderColor: props.polygon.strokeColor,
                },
            ]}/>
                </Marker>))}
        </>);
};
const styles = StyleSheet.create({
    subCircleMarker: {
        backgroundColor: 'rgba(255, 255, 255, .3)',
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: 'dotted',
        padding: 8,
    },
});
//# sourceMappingURL=SubCircleMarkers.js.map