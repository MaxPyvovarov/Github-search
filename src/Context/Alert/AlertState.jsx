import React, {useReducer} from 'react';
import {HIDE_ALERT, SHOW_ALERT} from '../Types';
import {AlertContext} from './alertContext';
import alertReducer from './alertReducer';

const AlertState = ({children}) => {
	const [state, dispatch] = useReducer(alertReducer, null);

	const hide = () => dispatch({type: HIDE_ALERT});

	const show = (text, type = 'danger') =>
		dispatch({
			type: SHOW_ALERT,
			payload: {type, text},
		});

	return (
		<AlertContext.Provider
			value={{
				hide,
				show,
				alert: state,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertState;
