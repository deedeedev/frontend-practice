export default [
  {
    type: "reaction",
    data: {
      isRead: false,
      postTitle: "My first tournament today!",
      postLink: "#",
      time: "1m",
      user: {
        name: "Mark Webber",
        img: "/25-notifications-page/avatar-mark-webber.webp",
        link: "#",
      },
    },
  },
  {
    type: "follow",
    data: {
      isRead: false,
      time: "5m",
      user: {
        name: "Angela Gray",
        img: "/25-notifications-page/avatar-angela-gray.webp",
        link: "#",
      },
    },
  },
  {
    type: "group",
    data: {
      action: "join",
      isRead: false,
      groupName: "Chess Club",
      groupLink: "#",
      time: "1 day",
      user: {
        name: "Jacob Thompson",
        img: "/25-notifications-page/avatar-jacob-thompson.webp",
        link: "#",
      },
    },
  },
  {
    type: "message",
    data: {
      isRead: true,
      text: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      time: "5 days",
      user: {
        name: "Rizky Hasanuddin",
        img: "/25-notifications-page/avatar-rizky-hasanuddin.webp",
        link: "#",
      },
    },
  },
  {
    type: "comment",
    data: {
      isRead: true,
      img: "/25-notifications-page/image-chess.webp",
      imgLink: "#",
      time: "1 week",
      user: {
        name: "Kimberly Smith",
        img: "/25-notifications-page/avatar-kimberly-smith.webp",
        link: "#",
      },
    },
  },
  {
    type: "reaction",
    data: {
      isRead: true,
      postTitle: "5 end-game strategies to increase your win rate",
      postLink: "#",
      time: "2 weeks",
      user: {
        name: "Nathan Peterson",
        img: "/25-notifications-page/avatar-nathan-peterson.webp",
        link: "#",
      },
    },
  },
  {
    type: "group",
    data: {
      action: "leave",
      isRead: true,
      groupName: "Chess Club",
      groupLink: "#",
      time: "2 weeks",
      user: {
        name: "Anna Kim",
        img: "/25-notifications-page/avatar-anna-kim.webp",
        link: "#",
      },
    },
  },
]
