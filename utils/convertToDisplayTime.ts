const displayTimeObject = {
	"00:00:00.000Z": "12:00 AM",
	"00:30:00.000Z": "12:30 AM",
	"01:00:00.000Z": "1:00 AM",
	"01:30:00.000Z": "1:30 AM",
	"02:00:00.000Z": "2:00 AM",
	"02:30:00.000Z": "2:30 AM",
	"03:00:00.000Z": "3:00 AM",
	"03:30:00.000Z": "3:30 AM",
	"04:00:00.000Z": "4:00 AM",
	"04:30:00.000Z": "4:30 AM",
	"05:00:00.000Z": "5:00 AM",
	"05:30:00.000Z": "5:30 AM",
	"06:00:00.000Z": "6:00 AM",
	"06:30:00.000Z": "6:30 AM",
	"07:00:00.000Z": "7:00 AM",
	"07:30:00.000Z": "7:30 AM",
	"08:00:00.000Z": "8:00 AM",
	"08:30:00.000Z": "8:30 AM",
	"09:00:00.000Z": "9:00 AM",
	"09:30:00.000Z": "9:30 AM",
	"10:00:00.000Z": "10:00 AM",
	"10:30:00.000Z": "10:30 AM",
	"11:00:00.000Z": "11:00 AM",
	"11:30:00.000Z": "11:30 AM",
	"12:00:00.000Z": "12:00 PM",
	"12:30:00.000Z": "12:30 PM",
	"13:00:00.000Z": "1:00 PM",
	"13:30:00.000Z": "1:30 PM",
	"14:00:00.000Z": "2:00 PM",
	"14:30:00.000Z": "2:30 PM",
	"15:00:00.000Z": "3:00 PM",
	"15:30:00.000Z": "3:30 PM",
	"16:00:00.000Z": "4:00 PM",
	"16:30:00.000Z": "4:30 PM",
	"17:00:00.000Z": "5:00 PM",
	"17:30:00.000Z": "5:30 PM",
	"18:00:00.000Z": "6:00 PM",
	"18:30:00.000Z": "6:30 PM",
	"19:00:00.000Z": "7:00 PM",
	"19:30:00.000Z": "7:30 PM",
	"20:00:00.000Z": "8:00 PM",
	"20:30:00.000Z": "8:30 PM",
	"21:00:00.000Z": "9:00 PM",
	"21:30:00.000Z": "9:30 PM",
	"22:00:00.000Z": "10:00 PM",
	"22:30:00.000Z": "10:30 PM",
	"23:00:00.000Z": "11:00 PM",
	"23:30:00.000Z": "11:30 PM",
};

export type Time = keyof typeof displayTimeObject;

export const convertToDisplayTime = (time: Time) => {
	return displayTimeObject[time];
};
