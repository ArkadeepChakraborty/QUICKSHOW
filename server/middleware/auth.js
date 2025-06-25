// import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next)=>{
//     try {
//     const { userId } = req.auth();
//     const user = await clerkClient.users.getUser(userId)
//     if(user.privateMetadata.role !== 'admin') {
//     return res.json({success: false, message: "not authorized"})
//     }
//     next();
//     } catch (error) {
//     return res.json({ success: false, message: "not authorized" });
//     }

// }


// import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next) => {
//   try {
//     const auth = req.auth?.(); // ✅ safe call to avoid crashing
//     const userId = auth?.userId;

//     if (!userId) {
//       return res.status(401).json({ success: false, message: "Unauthorized: Missing user ID" });
//     }

//     const user = await clerkClient.users.getUser(userId);

//     if (user.privateMetadata.role !== "admin") {
//       return res.status(403).json({ success: false, message: "Not authorized" });
//     }

//     next();
//   } catch (error) {
//     console.error("Admin middleware error:", error);
//     return res.status(403).json({ success: false, message: "Not authorized" });
//   }
// };



import { clerkClient, getAuth } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = getAuth(req); // ✅ this is the correct pattern for v1.7.0

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const user = await clerkClient.users.getUser(userId);

    if (user.privateMetadata.role !== 'admin') {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    next();
  } catch (error) {
    console.error("Clerk Auth Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
