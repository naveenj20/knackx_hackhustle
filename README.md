# knackx_hackhustle

# Smart Hospital Resource & Patient Matching System

An intelligent, real-time platform that connects patients and hospitals to enable faster, data-driven medical decisions based on live resource availability, location, and patient condition.

---

## Overview

In emergency situations, selecting the right hospital is critical. This system provides a unified dashboard for both patients and hospitals, enabling real-time visibility of medical resources and intelligent matching based on treatment needs.

---

## Problem Statement

Patients and emergency responders lack access to real-time information about hospital resources such as ICU beds, ventilators, and specialist availability. This leads to delays in treatment, inefficient hospital utilization, and increased risk during critical situations.

---

## Proposed Solution

This platform integrates patient data with live hospital resource tracking to recommend the most suitable nearby hospital using:

- Geolocation-based matching  
- Condition + equipment-based filtering  
- Real-time updates via WebSockets  

---

## Tech Stack

### Frontend
- React.js  
- Axios  
- Socket.io Client  

### Backend
- Node.js  
- Express.js  
- Socket.io  

### Data Layer
- JSON (prototype)  
- MongoDB (planned)

---

## Features

- Live hospital resource tracking (ICU, ventilators, etc.)  
- Smart patient-to-hospital matching  
- Real-time updates using Socket.io  
- Dual dashboards (Patient & Hospital)  
- (Optional) Map-based hospital visualization  

---

## Architecture

Patient / Hospital Dashboard (React)
↓
API Requests
↓
Backend (Node.js + Express)
↓
Matching Engine (Logic + Distance + Assets)
↓
Hospital Data (JSON / DB)
↓
Real-time Updates (Socket.io)
↓
Frontend UI

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/2e9eae33-9eb0-4510-ab3c-b489465ad531" />

## Working

1. Patient enters condition and required treatment  
2. System checks nearby hospitals  
3. Filters based on:
   - Required equipment availability  
   - Hospital expertise  
4. Ranks hospitals by distance + resource score  
5. Displays best matches instantly  

---

## Sustainability Impact

Supports:
- **SDG 3: Good Health & Well-being**  
- **SDG 9: Industry, Innovation & Infrastructure**

By improving emergency response efficiency and optimizing hospital resource utilization.

---

## Demo


---


## Future Enhancements

- Authentication system (patients & hospitals)  
- Cloud deployment (AWS / Firebase)  
- AI-based severity prediction  
- Mobile app integration  
- MongoDB integration  

---

## Team Members

- Kamalesh Vijayakumar V
- Abhishek AT  
- Naveen Jaisanker

---
