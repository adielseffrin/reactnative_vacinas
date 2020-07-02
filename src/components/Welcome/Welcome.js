import {urls} from "../../util/urlUtils";
import {Button, Typography, Card, CardContent} from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';
//import {CardItem} from 'native-base';

export const Welcome = ({data}) => {

    //const dogPage () => {}

    return <React.Fragment>
            <Typography variant="headline" component="h2" >
                Selecione um pet
            </Typography>
            {
                Object.values(urls).map((url,index) => {
                    return <Button raised
                                   key={index}
                                   component={ props => <Link to={url.path} {...props}/>}>
                                       {url.name}
                            </Button>
                })
            }
            {
                data.map((item,index) => {
                    return  <TouchableOpacity key={index}>
                                <Card style={{margin: '5px'}} pointerEvents="none">
                                    <CardContent>
                                        {item.nome}
                                    </CardContent>
                                    <Text>{"\n"}</Text>
                                </Card>
                            </TouchableOpacity>
                })
            }
        </React.Fragment>
    
};

