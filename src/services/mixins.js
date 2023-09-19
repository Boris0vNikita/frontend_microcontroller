export default {
    methods: {
        formatDate(dateString) {
            const dateOptions = {
                day: "numeric", // 2-digit
                month: "long", // numeric "2-digit", "narrow", "short" и "long"
                year: "numeric", // 2-digit
                // era: "long",
                //weekday: "narrow", // "narrow", "short" и "long"
                //timeZoneName: "short",
                hour: "numeric",
                // hour12: true,
                minute: "numeric"
                // second: 'numeric'
            }
            const date = new Date(dateString);
            const RUDate = new Intl.DateTimeFormat("ru", dateOptions).format(date);
                // Then specify how you want your dates to be formatted
            //return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
            return RUDate
        }
    }
}
   
