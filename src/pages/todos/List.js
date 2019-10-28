import React from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Button
} from 'react-native';
import { connect } from 'react-redux';

import { 
    addTodo, 
    deleteTodo, updateTodo, 
    changeTitle, changeUpdateState
} from '../../store/actions/todosActions';
import { guidGenerator } from '../../common/functions';
import styles from './style';

const ToDosList = (props) => {
    const { container, todoTitleInput, listItem, listItemCont, list, hr, deleteButton, updateTextInput } = styles;
    const { todo, todos } = props

    const addTodo = () => {
        const newTodo = {
            id: guidGenerator(),
            title: todo.title,
            updating: false,
            updateTitle: '',
        }
        props.addTodo(newTodo);
    }

    return(
        <View style={container} >
            <Text>Todos</Text>
            <TextInput
                style={todoTitleInput}
                onChangeText={(text) => {props.changeTitle(text);}}
                onSubmitEditing={addTodo}
                value={todo.title}
                placeholder="Add Todo"
                returnKeyType="done"
                returnKeyLabel="done"
            />
    
            <FlatList
                style={list}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                    <View key={index}>
                        <View style={listItemCont}>
                            <Text style={listItem}>
                                {item.title}
                            </Text>
                            {!item.updating ?  <Button title="Update" style={deleteButton} onPress={() => props.changeUpdateState(item.id)} /> : null}
                            <Button title="X" style={deleteButton} onPress={() => props.deleteTodo(item.id)} />
                        </View>

                        {item.updating ? 
                            <View style={styles.updateView}>
                                <TextInput
                                    onChangeText={(text) => {props.updateTodo({...item, updateTitle: text});}}
                                    onSubmitEditing={addTodo}
                                    style={updateTextInput}
                                    value={item.updateTitle}
                                    placeholder="Update.."
                                    returnKeyType="done"
                                    returnKeyLabel="done"
                                /> 
                                <Button title="Done" style={deleteButton} onPress={() => { props.updateTodo({...item, title: item.updateTitle}); props.changeUpdateState(item.id); }} />
                                <Button title="Cancel" style={deleteButton} onPress={() => { props.changeUpdateState(item.id); }} />
                            </View>
                            : null
                        }
                        <View style={hr} />
                    </View>
                }
            />

        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        todo: state.todos.item,
        todos: state.todos.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTitle: (title) => {
            dispatch(changeTitle(title));
        },
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        updateTodo: (todo) => {
            dispatch(updateTodo(todo));
        },
        changeUpdateState: (id) => {
            dispatch(changeUpdateState(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDosList);