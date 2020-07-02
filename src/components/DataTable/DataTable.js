import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import FirebaseService from "../../services/FirebaseService"
import {Link} from 'react-router-dom';
import {privateUrls} from '../../util/urlUtils'

export const DataTable = ({data}) => {

    const remove = (id) => {
        FirebaseService.remove(id, 'pets');
    }

    return <React.Fragment>
        <Typography variant="headline" component="h2"> Dados </Typography>
        <Table selectable="false">
            <TableHead>
                <TableRow>
                    <TableCell>Chave</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Nascimento</TableCell>
                    <TableCell>Vacina em dia</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}> 
                            <TableCell>{item.key}</TableCell>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.dob}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => remove(item.key)}>Remover</Button>
                                <Button component={props => 
                                <Link to={privateUrls.edit.pathWithoutParam + item.key} {...props} />}>
                                    Editar
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};