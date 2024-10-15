import React, { useState, useEffect } from "react";
import { Modal, Button, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { CalibriText } from "./fonts/calibriFont";
import { CalibriBoldText } from "./fonts/calibriBoldFont";

export function GraphInform() {
    const [modalVisible, setModalVisible] = useState(true);
    const [openedPrior, setOpenedPrior] = useState(0);

    useEffect(() => {
        // Automatically open the modal on mount
        setOpenedPrior(1);
    }, []);

    const handlePress = () => {
        setModalVisible(false);
        setOpenedPrior(1); // Ensure that the modal won't show again
    };

    return (
        <>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity onPress={handlePress}>
                                <Image 
                                    source={require('../images/crossBlack.png')}
                                    style={styles.closeButtonImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <CalibriBoldText title='Did you know?' style={styles.title} />
                        <CalibriText
                            title='You can scroll along the graph to look for data at different times,
                            and can click points on the graph for specific values!' 
                            style={styles.text}
                        />
                        <CalibriText title='Give it a go! And for more information, head over to the FAQ Page :)'  style={styles.text}/>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: Dimensions.get('window').width * 0.8,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        display: 'flex'
    }, 
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    closeButtonImage: {
        height: 26,
        width: 26,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom:10,
        textAlign: 'center'
    },
    text: {
        fontSize: 18,
       marginTop: 5
    }
});
