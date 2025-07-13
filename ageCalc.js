function calculateAge() {
    const dob = document.getElementById('dob').value;

    // Validate input
    if (!dob) {
        alert("Please select your Date of Birth");
        return;
    }

    const dobDate = new Date(dob);
    const now = new Date();

    // Prevent future dates
    if (dobDate > now) {
        alert("Date of Birth cannot be in the future!");
        return;
    }

    // Calculate rough differences
    let years = now.getFullYear() - dobDate.getFullYear();
    let months = now.getMonth() - dobDate.getMonth();
    let days = now.getDate() - dobDate.getDate();

    // Adjust days if negative
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Format with proper singular/plural
    function formatUnit(value, unit) {
        return `${value} ${unit}${value === 1 || value === 0 ? '' : 's'}`;
    }

    const yearText = formatUnit(years, "year");
    const monthText = formatUnit(months, "month");
    const dayText = formatUnit(days, "day");

    // Show result
    document.getElementById('result').innerHTML = `Your Age is ${yearText}, ${monthText}, and ${dayText}.`;
}
