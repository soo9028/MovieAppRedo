import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacityComponent } from 'react-native';
import InputComponent from '../../login_components/InputComponent';
import TabComponent from '../../login_components/TabComponent'

const SignUp = (props) => {
    const [tabs, setTab] = useState(['전화번호', '이메일']);
    const [tabIndex, setTabIndex] = useState([0]);

    return (
        <View style={style.root}>
            <View style={style.content}>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    {
                        <TabComponent onPress={() => setTabIndex(tabIndex)} selected={tabIndex} label={tabs[tabIndex]}></TabComponent>
                    }
                </View>

                {/* 정보 입력 영역 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>
                {
                    tabIndex == 1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }

                {
                    tabIndex == 0 && <View style={{ width: '100%', margin: 16 }}><Button title='다음' onPress={() => { setTabIndex(1) }}></Button></View>
                }
                {
                    tabIndex == 1 && <View style={{ width: '100%', margin: 16 }}><Button title='완료' onPress={() => props.navigation.goBack()}></Button></View>
                }
                {
                    tabIndex == 0 && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, {'\n'}언제든지 수신을 취소할 수 있습니다.</Text>
                }


            </View>

            <View style={style.footer}>
                <Text style={style.footerMsg}>
                    이미 계정이 있으신가요?
                    <Text onPress={() => { props.navigation.goBack() }} style={style.goBack}>로그인</Text>
                </Text>
            </View>
        </View>
    );
};

export default SignUp;

const style = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FEFFFF'
    },

    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 32,

    },

    footer: {
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8
    },
    footerMsg: {
        color: '#929292',
        textAlign: 'center'
    },
    goBack: {
        color: '#3796EF'
    },

    telMessage: {
        textAlign: 'center',
        fontSize: 12,
        color: "#929292",
        marginLeft: 8,
        marginRight: 8
    }

});
