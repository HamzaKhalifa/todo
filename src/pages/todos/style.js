import { colors } from '../../conf/colors';

const styles = {
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoTitleInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        marginTop: 30
    },
    list: {
        width: "100%"
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18,
        width: '50%'
    },
    listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '90%',
        marginLeft: '5%'
    },
    hr: {
        height: 1,
        backgroundColor: "gray"
    },
    deleteButton: {
        color: colors.delete
    },
    updateTextInput: {
        width: '60%',
    },
    updateView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
    }
    
}

export default styles;