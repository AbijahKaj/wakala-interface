import React, { Fragment, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";

import SwipeButton from "../../components/SwipeButton";
import ScreenCmpt from "../../components/ScreenCmpt";
import Modal from "../../components/Modal";

import { COLORS, SIZES } from "../../consts/theme";
import { ERROR, BORED } from "../../assets/images";
import {mainStyles, cardStyles, modalStyles} from "../../consts/transactionScreenStyles";

const styles = mainStyles

const CardElement = (props) => {
  return (
    <View style={cardStyles.container}>
      <View>
        <Text style={cardStyles.subTitle}>Send</Text>
        <TextInputMask
          type={"money"}
          options={{
            unit: "Ksh ",
          }}
          style={cardStyles.title}
          value={props.value}
          placeholder="Ksh 0,00"
          placeholderTextColor={COLORS.primary}
        />
      </View>
      <View>
        <Text style={cardStyles.subTitle}>To</Text>
        <Text style={cardStyles.title}>+254 705 124 767</Text>
        <TouchableOpacity style={cardStyles.copyContainer}>
          <Text style={cardStyles.copyText}>Copy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ModalContent = (props) => {
  return (
    <View style={modalStyles.container}>
      {props.isActionSuccess ? (
        props.type === "deposit" ? (
          <View>
            <Ionicons
              name="checkmark-circle"
              size={36}
              color="#4840BB"
              style={{ textAlign: "center", marginBottom: 12 }}
            />
            <Text style={[styles.title, { color: "#4840BB" }]}>
              Transaction Successful!
            </Text>
            <TouchableOpacity onPress={() => props.handleAction()}>
              <Text style={modalStyles.button}>Okay!</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Image source={BORED} style={modalStyles.image} />
            <Text style={modalStyles.title}>Thank you!</Text>
            <Text style={modalStyles.text}>
              After your agents confirms of M-PESA payment receipt. Your cUSD
              will be deposited to your wallet.
            </Text>

            <TouchableOpacity onPress={() => props.handleAction()}>
              <Text style={modalStyles.button}>Got it!</Text>
            </TouchableOpacity>
          </View>
        )
      ) : (
        <View>
          <Image source={ERROR} style={modalStyles.errorImage} />
          <Text style={modalStyles.title}>Oh Snap!</Text>
          <Text style={modalStyles.text}>
            Something just happened. Please try again.
          </Text>
          <TouchableOpacity onPress={() => props.handleAction()}>
            <Text style={modalStyles.button}>Try again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const ConfirmPayment = () => {
  const route = useRoute();
  const modalRef = useRef();
  const navigation = useNavigation();

  const type = route.params.type;
  const value = route.params.value;

  const [isActionSuccess, setIsActionSuccess] = useState(true);

  const handleAction = async () => {
    // Call function to perform the addressed action
    // If response is success the set isOperationSuccess
    // to true and open modal
    // if (type === "deposit") {
    //   performDepositAction().then(
    //     (response) => {
    //       setIsActionSuccess(true);
    //     },
    //     (error) => {
    //       setIsActionSuccess(false);
    //     }
    //   );
    // } else {
    //   performWithdrawAction().then(
    //     (response) => {
    //       setIsActionSuccess(true);
    //     },
    //     (error) => {
    //       setIsActionSuccess(false);
    //     }
    //   );
    // }
    openModal();
  };

  const openModal = () => {
    modalRef.current?.openModal();
  };

  const closeModal = () => {
    if (!isActionSuccess) {
      modalRef.current?.closeModal();
      return;
    }

    modalRef.current?.closeModal();

    if (type === "deposit") {
      navigation.navigate("Rate", { operation: type });
    } else {
      navigation.navigate("Success", { operation: type });
    }
  };

  return (
    <Fragment>
      <ScreenCmpt>
        <View style={styles.container}>
          <View>
            <View style={styles.titleContainer}>
              <View style={styles.iconContainer}>
                {type === "deposit" ? (
                  <FontAwesome5 name="money-bill" size={20} color="white" />
                ) : (
                  <Ionicons
                    name="md-paper-plane-sharp"
                    size={20}
                    color="white"
                  />
                )}
              </View>
              <Text style={styles.title}>
                {type === "deposit"
                  ? "Confirm M-PESA Payment "
                  : "Send M-PESA now"}
              </Text>
            </View>

            <Text style={[styles.text, { marginBottom: 30, marginTop: 15 }]}>
              {type === "deposit"
                ? "The agent confirmed that he sent Ksh 1,000 to your number +254 706 427 718"
                : "Send M-PESA to the member so that you can receive your cUSD."}
            </Text>
            <Text style={styles.text}>
              {type === "deposit" &&
                "To receive your cUSD, send M-PESA to details below."}
            </Text>
          </View>

          {type === "withdraw" && <CardElement value={value} />}

          <View>
            <SwipeButton handleAction={handleAction} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.secondaryButtonText, { color: "#133FDB" }]}>
                {type === "deposit" ? "Didn’t receive payments?" : "Cancel"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScreenCmpt>

      <Modal
        ref={modalRef}
        style={
          !isActionSuccess
            ? { height: 490 }
            : type === "deposit"
            ? { height: 300 }
            : { height: 420 }
        }
        content={
          <ModalContent
            handleAction={closeModal}
            type={type}
            isActionSuccess={isActionSuccess}
          />
        }
      />
    </Fragment>
  );
};


export default ConfirmPayment;
