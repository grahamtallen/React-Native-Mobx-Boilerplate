/**
 * Created by grahamallen on 12/21/16.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Container, Content, Header, Title, Button} from 'native-base'
import {Grid, Col, Row} from 'react-native-easy-grid'
import {observer, Provider} from 'mobx-react/native'
import {observable} from 'mobx'
import {numberStore, addOneToRight} from './stores/NumberStore'

@observer
export default class Counter extends Component {
    constructor() {
        super();
    }

    addToLeft() {
        numberStore.addOneToLeft()
    }

    addToRight() {
        addOneToRight(numberStore)
    }

    render() {
        var right = numberStore.right;
        var left = numberStore.left;
        var center = numberStore.center;
        var operator = numberStore.operator
        return (
            <Container>
                <Header>
                    <Title>Counter Example</Title>
                </Header>
                <Content>
                    <Grid style={{padding: 20}}>
                        <Row>
                            <Col>
                                <Row style={{height: 100, justifyContent: "center" }}>
                                    <Button onPress={this.addToLeft} secondary>
                                        Left Button {left}
                                    </Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={{height: 100, justifyContent: "center"}}>
                                    <Button warning onPress={this.addToRight}>
                                        Right Button {right}
                                    </Button>
                                </Row>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row style={{height: 100, justifyContent: "center" }}>
                                    <Button success={operator == "-"}
                                            onPress={() => numberStore.operator = "-"}
                                    >
                                        Minus
                                    </Button>
                                </Row>
                            </Col>
                            <Col>
                                <Row style={{height: 100, justifyContent: "center"}}>
                                    <Button success={operator == "+"}
                                            onPress={() => numberStore.operator = "+"}
                                    >
                                        Plus
                                    </Button>
                                </Row>

                            </Col>
                        </Row>
                        <Row style={{justifyContent: "center", alignItems: "center"}}>
                            <Button info >
                                Computed {center}
                            </Button>
                        </Row>
                    </Grid>

                </Content>
            </Container>
        );
    }
}

