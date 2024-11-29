# Introduction
Both students and staff at University of Toronto face issues with booking rooms. For students, booking study rooms comes with the challenges of navigating through multiple pages, 

Welcome to our LibraLink, designed to make reserving rooms easier and more efficient for both students and stagg. Our platform helps you find available rooms based on your specific preferences, all in one seamless experience. Users no longer need to navigate through multiple pages to search for available rooms in different buildings - our web app is able to consolidates all your needs into a single, user-friendly interface.


# Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Prerequisites](#prerequisites)
3. [How to Use](#how-to-use)
    1. [Logging In](#logging-in)
    2. [Filter by Preference](#filter-by-preference)
    3. [Choose Your Room](#choose-your-room)
    4. [Check Your Bookings](#check-your-bookings)
    5. [Delete Unwanted Bookings](#delete-unwanted-bookings)
6. [Challenges and Solutions](#challenges-and-solutions)





# Setup and Installation 

## Prerequisites 

- Node.js and npm installed
- Clone the repository to your local machine.



## 

# How to Use

## Logging In
Users can log in with their designated email and password, allowing them to access their institutions available buildings and rooms.

## Filter by Preference

Users can quickly narrow down their choices based on the following preferences:

**Library**: Select your preferred library from a list of available options. Whether you're looking for a quiet study room in the Robarts Library or a meeting space in the Gerstein Library, you can easily find rooms in the library that suits you best.

**Date**: Pick the exact date that works for you. The app lets you filter rooms based on a specific day, so you can find availability without having to scroll through irrelevant options.

**Time**: Choose your desired start and end time. Whether you need a room in the morning or late afternoon, the system will show you rooms that fit within your selected time window, making scheduling easy and efficient.

**Number of Attendees**: Specify how many people will be attending your meeting or study session. The app will filter available rooms based on the number of attendees, ensuring that the space you book has enough capacity to comfortably accommodate everyone.

By adjusting these filters, you can quickly and efficiently find the best room that matches all of your preferences, saving you time and effort. No more navigating between pages or going back and forth to check availability – everything you need is right at your fingertips.

<img src="/public/images/profile.png" alt="Home" width="300"/>


## Choose Your Room

LibraLink will then provide a list of available rooms from a variety of libraries and buildings. The user can then choose which room to book, according to their listed times and location. 

## Check Your Bookings
At any time, you can view a list of your active bookings, including important details such as:

**Library**: The location of your reserved room.
**Date**: The scheduled date for your booking.
**Time**: The start and end time of your reserved room.
This overview gives you a quick snapshot of your upcoming study sessions or meetings, making it easy to track all your reservations.

<img src="/public/images/home.jpeg" alt="Profile" width="300"/>

### Delete Unwanted Bookings
Plans change, and deleting any booking you no longer need is simple. Each booking displays a delete button next to it, which, when clicked, will remove the booking from your list.

# Challenges and Solutions

## Calling the APIs
While we've successfully developed both the frontend and backend of the application, the key challenge lies in ensuring seamless communication between the two. Establishing robust API calls is crucial for ensuring that data flows smoothly between the user interface and the server, and that users can interact with their bookings in real time.

## User Interactions with Their Bookings
Users can view and manage their bookings directly through the app. They are presented with a list of their current reservations, with the ability to delete any booking they no longer need. This functionality allows for users to have full control over their scheduled rooms, and the option to opt out of a booking when not needed. 

## User authentication 
As our platform serves the University of Toronto community, user authentication is a critical part of the system. To maintain security and ensure that only authorized individuals can make bookings, users must sign in with their university credentials. If a user is not signed in, they will be unable to access their bookings, and an error message will be displayed.
<img src="/public/images/error message.jpeg" alt="Error Message" width="200"/>
