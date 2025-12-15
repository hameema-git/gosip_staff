// setStaffRole.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const email = "gosip@withus.com"; // 👈 STAFF EMAIL

async function setRole() {
  try {
    const user = await admin.auth().getUserByEmail(email);

    await admin.auth().setCustomUserClaims(user.uid, {
      role: "staff",
    });

    console.log("✅ Staff role assigned successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error assigning role:", err.message);
    process.exit(1);
  }
}

setRole();
