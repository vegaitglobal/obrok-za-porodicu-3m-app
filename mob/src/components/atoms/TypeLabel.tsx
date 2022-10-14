import React from 'react';
import { StyleSheet, View } from 'react-native';


interface TypeLabelProps {
    text: string;
}

const TypeLabel: React.FC<TypeLabelProps> = ({
    text,
}) => {
    return (
        <View style={styles.container}>
            {
                // TODO: Delete or implement this component
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default TypeLabel;
