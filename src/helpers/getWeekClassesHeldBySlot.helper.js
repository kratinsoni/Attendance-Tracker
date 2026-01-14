/**
 * Calculates the number of classes held this week up to a specific day.
 * * @param {string[]} userSlots - Array of registered slots (e.g., ["A3", "C3", "B2"])
 * @param {string} currentDay - The day to count till (e.g., "WED")
 * @returns {number} - Total number of classes
 */
function countClasses(userSlots, currentDay) {
  // 1. Data Structure representing the IIT KGP Slot Matrix (Spring 25-26)
  // Each day contains an array of arrays, where each inner array represents a period (8am to 6pm)
  // and contains the active Slot IDs for that time.
  const timeTable = {
    MONDAY: [
      ["A3"], // 8:00 - 8:55
      ["A2", "A3"], // 9:00 - 9:55 (A2 is yellow block, A3(1,2) listed below)
      ["C3", "C4"], // 10:00 - 10:55
      ["B3"], // 11:00 - 11:55
      ["D3", "D4"], // 12:00 - 12:55
      ["H3"], // 14:00 - 14:55
      ["U3", "U4"], // 15:00 - 15:55
      ["U3", "U4"], // 16:00 - 16:55
      ["S3"], // 17:00 - 17:55
    ],
    TUESDAY: [
      ["B2", "B3"], // 8:00 - 8:55
      ["B3"], // 9:00 - 9:55 (Implied continuation or sub-slot)
      ["D2", "D3", "D4"], // 10:00 - 10:55
      ["D3", "D4"], // 11:00 - 11:55
      ["A3"], // 12:00 - 12:55
      [], // 14:00 - 14:55 (Often Lab slots or empty in general matrix)
      ["U3", "U4"], // 15:00 - 15:55
      ["H2", "H3"], // 16:00 - 16:55
      [], // 17:00 - 17:55
    ],
    WEDNESDAY: [
      ["C2", "C3", "C4"], // 8:00 - 8:55
      ["F3", "F4"], // 9:00 - 9:55
      ["G3"], // 10:00 - 10:55
      ["E3", "E4"], // 11:00 - 11:55
      [], // 12:00 - 12:55
      ["X4"], // 14:00 - 14:55
      ["X4"], // 15:00 - 15:55
      ["X4"], // 16:00 - 16:55
      ["X4"], // 17:00 - 17:55
    ],
    THURSDAY: [
      ["D4"], // 8:00 - 8:55
      ["F3", "F4"], // 9:00 - 9:55
      ["C4"], // 10:00 - 10:55
      ["E3", "E4"], // 11:00 - 11:55
      ["G3"], // 12:00 - 12:55
      ["I2"], // 14:00 - 14:55
      ["V2", "V3", "V4"], // 15:00 - 15:55
      ["V2", "V3", "V4"], // 16:00 - 16:55
      ["S3"], // 17:00 - 17:55
    ],
    FRIDAY: [
      ["G3"], // 8:00 - 8:55
      ["E2", "E3", "E4"], // 9:00 - 9:55
      ["F2", "F3", "F4"], // 10:00 - 10:55
      [], // 11:00 - 11:55
      [], // 12:00 - 12:55
      ["V3", "V4"], // 14:00 - 14:55
      ["I2"], // 15:00 - 15:55
      [], // 16:00 - 16:55
      ["S3"], // 17:00 - 17:55
    ],
  };

  const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
  let classCount = 0;

  // Normalize user slots to upper case for consistent matching
  const normalizedUserSlots = userSlots.map((s) => s.toUpperCase());

  // 2. Iterate through days
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];

    // Get the periods for the current day
    const daySchedule = timeTable[day];

    // 3. Iterate through periods in that day
    if (daySchedule) {
      for (let periodSlots of daySchedule) {
        // Check if ANY of the user's registered slots exist in this period's active slots
        // We use .some() because a student can't be in two places at once,
        // but we need to find if their slot is active.
        const hasClass = normalizedUserSlots.some((userSlot) => {
          return periodSlots.includes(userSlot);
        });

        if (hasClass) {
          classCount++;
        }
      }
    }

    // 4. Stop if we have reached the target day
    if (day === currentDay.toUpperCase()) {
      break;
    }
  }

  return classCount;
}

// --- Example Usage ---
const mySlots = ["A3", "C3", "H3", "S3"]; // Example registered slots
const dayToCheck = "WEDNESDAY";

const total = countClasses(mySlots, dayToCheck);
console.log(
  `Total classes for slots [${mySlots}] till ${dayToCheck}: ${total}`
);

export default countClasses;