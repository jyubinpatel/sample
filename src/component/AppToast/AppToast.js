import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ErrorIcon, InfoIcon, SuccessIcon} from '../../../assets';
import Modal from 'react-native-modal';
import styles from './AppToast.styles';

export const AppToast = ({visible, type, message, timeInMillis, callback}) => {
  const {viewStyle, subView, textWrapper} = styles();
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    setShowModal(visible);
    setTimeout(
      () => {
        setShowModal(false);
        callback ? callback() : null;
      },
      timeInMillis ? timeInMillis : 3000,
    );
  }, [visible]);

  return (
    <Modal
      transparent
      animationType={'fade'}
      visible={showModal}
      onBackdropPress={() => {
        setShowModal(false);
      }}>
      <View style={viewStyle(type)}>
        <View style={subView}>
          {type === 'info' ? (
            <InfoIcon />
          ) : type === 'error' ? (
            <ErrorIcon width={22} height={22} />
          ) : (
            <SuccessIcon />
          )}
        </View>
        <Text style={textWrapper}>{message}</Text>
      </View>
    </Modal>
  );
};

AppToast.defaultProps = {
  type: 'success',
  message: '',
  visible: false,
  callback: null,
};
