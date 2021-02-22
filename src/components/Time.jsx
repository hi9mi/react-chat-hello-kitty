import { format, isThisWeek, isToday } from 'date-fns';
import React from 'react';

const getMessageTime = (date) => {
	if (isToday(new Date(date))) {
		return format(new Date(date), 'hh:mm a');
	} else if (isThisWeek(new Date(date))) {
		return format(new Date(date), 'ccc', { weekStartsOn: 1 });
	} else {
		return format(new Date(date), 'MM.dd.yy');
	}
};

const Time = ({ date }) => {
	return <span>{getMessageTime(date)}</span>;
};

export default Time;
