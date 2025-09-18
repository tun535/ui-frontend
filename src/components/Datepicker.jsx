import { useState, useMemo } from 'react';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const weekdays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

  const formattedDate = useMemo(() => {
    return selectedDate ? selectedDate.toLocaleDateString('th-TH') : '';
  }, [selectedDate]);

  const calendarDays = useMemo(() => {
    const days = [];
    
    // Previous month days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth, -i),
        otherMonth: true
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(currentYear, currentMonth, i),
        otherMonth: false
      });
    }
    
    // Next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({
        date: new Date(currentYear, currentMonth + 1, i),
        otherMonth: true
      });
    }
    
    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = useMemo(() => {
    const months = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    return months[currentMonth];
  }, [currentMonth]);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectDate = (day) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  };

  const isSelected = (day) => {
    return selectedDate && 
           day.date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (day) => {
    const today = new Date();
    return day.date.toDateString() === today.toDateString();
  };

  return (
    <div className="relative inline-block w-full max-w-xs">
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder="เลือกวันที่"
        className="w-full p-3 border-2 border-gray-300 rounded-lg cursor-pointer bg-white text-gray-700 text-center font-medium focus:outline-none focus:border-purple-500 hover:border-purple-400 transition-colors"
      />
      
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-4 w-80">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 px-2">
            <button 
              onClick={prevMonth} 
              className="p-2 hover:bg-purple-100 rounded-lg transition-colors text-purple-600 font-bold text-lg"
            >
              ←
            </button>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {currentMonthName}
              </div>
              <div className="text-sm text-gray-600">
                พ.ศ. {currentYear + 543}
              </div>
            </div>
            <button 
              onClick={nextMonth} 
              className="p-2 hover:bg-purple-100 rounded-lg transition-colors text-purple-600 font-bold text-lg"
            >
              →
            </button>
          </div>
          
          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map(day => (
              <div key={day} className="text-center py-2 text-sm font-semibold text-gray-600 bg-gray-50 rounded">
                {day}
              </div>
            ))}
          </div>
          
          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => selectDate(day)}
                disabled={day.otherMonth}
                className={`
                  h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 mx-auto
                  ${day.otherMonth 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-purple-100 cursor-pointer'
                  }
                  ${isSelected(day) 
                    ? 'bg-purple-500 text-white shadow-lg scale-105' 
                    : ''
                  }
                  ${isToday(day) && !isSelected(day)
                    ? 'bg-purple-100 text-purple-600 font-bold border-2 border-purple-300'
                    : ''
                  }
                `}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-gray-100 text-center">
            <button 
              onClick={() => {
                setSelectedDate(new Date());
                setShowCalendar(false);
              }}
              className="text-sm text-purple-600 hover:text-purple-800 font-medium"
            >
              เลือกวันนี้
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
