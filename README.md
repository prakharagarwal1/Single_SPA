# Single SPA Base Template - Full Featured Dashboard

A comprehensive single-spa microfrontend architecture with a rich, intuitive dashboard featuring multiple modules and advanced functionality.

## Overview

This project demonstrates a modern single-spa setup with multiple microfrontends:

- **Root Config**: Main routing and layout configuration
- **Dashboard MFE**: Primary dashboard with navigation and content areas
- **Analytics MFE**: Advanced analytics with charts and data visualization
- **Profile MFE**: User profile management and settings
- **Notifications MFE**: Real-time notifications system
- **Calendar MFE**: Comprehensive calendar and scheduling
- **Auth MFE**: Authentication and user management

## Features

### 🎨 Rich UI Components

- Modern Tailwind CSS styling
- Heroicons for icons
- Headless UI for accessible components
- Responsive design for all devices
- Smooth animations and transitions

### 📊 Advanced Analytics

- Interactive charts (Area, Bar, Pie)
- Real-time data visualization
- Multiple chart types and configurations
- StatCard components for metrics
- Export capabilities

### 👥 User Management

- Profile management with edit functionality
- Settings and preferences
- Authentication system
- User roles and permissions

### 📅 Calendar & Scheduling

- Full calendar view with drag-and-drop
- Multiple view options (Day, Week, Month, Year)
- Event management and scheduling
- Team collaboration features

### 🔔 Notifications

- Real-time notifications
- Read/unread status tracking
- Notification preferences
- Quick actions and filters

### 🧭 Navigation

- Multi-level routing
- Breadcrumb navigation
- Responsive sidebar
- Mobile-friendly navigation

## Project Structure

```
/single-spa-base-template
├── root-mfe/
│   ├── src/
│   │   ├── codenv-root-config.js
│   │   ├── microfrontend-layout.html
│   │   └── index.ejs
│   ├── package.json
│   └── webpack.config.js
├── dashboard-mfe/
│   ├── src/
│   │   ├── App.js
│   │   ├── root.component.js
│   │   └── screens/
│   │       └── DashboardScreen.js
│   ├── package.json
│   └── webpack.config.js
├── analytics-mfe/
│   ├── src/
│   │   ├── codenv-analytics-mfe.js
│   │   ├── root.component.js
│   │   ├── components/
│   │   │   ├── AreaChart.js
│   │   │   ├── BarChart.js
│   │   │   ├── PieChart.js
│   │   │   └── StatCard.js
│   │   └── screens/
│   │       ├── AnalyticsDashboard.js
│   │       ├── AnalyticsReports.js
│   │       ├── AnalyticsAudience.js
│   │       └── AnalyticsConversions.js
│   ├── package.json
│   └── webpack.config.js
├── profile-mfe/
│   ├── src/
│   │   ├── codenv-profile-mfe.js
│   │   ├── root.component.js
│   │   └── screens/
│   │       ├── ProfileScreen.js
│   │       └── SettingsScreen.js
│   └── package.json
├── notifications-mfe/
│   ├── src/
│   │   ├── codenv-notifications-mfe.js
│   │   ├── root.component.js
│   │   └── screens/
│   │       └── NotificationScreen.js
│   └── package.json
├── calendar-mfe/
│   ├── src/
│   │   ├── codenv-calendar-mfe.js
│   │   ├── root.component.js
│   │   └── screens/
│   │       └── CalendarScreen.js
│   └── package.json
├── auth-mfe/
│   ├── src/
│   │   ├── codenv-auth-mfe.js
│   │   ├── root.component.js
│   │   └── screens/
│   │       └── LoginScreen.js
│   └── package.json
└── package.json
```

## Setup Instructions

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd single-spa-base-template
```

2. Install all microfrontends:

```bash
npm run install:all
```

3. Start all applications:

```bash
npm run start:all
```

### Individual Microfrontend Setup

For each microfrontend, navigate to its directory and run:

```bash
cd <microfrontend-name>
npm install
npm start
```

## Development

### Running the Development Server

All microfrontends can be started simultaneously using the root package's scripts:

```bash
# Start all microfrontends
npm run start:all

# Install all dependencies
npm run install:all
```

### Building for Production

Build each microfrontend individually:

```bash
# Build all microfrontends
cd root-mfe
npm run build

cd dashboard-mfe
npm run build

# ... repeat for each microfrontend
```

### Testing

Run tests for each microfrontend:

```bash
cd <microfrontend-name>
npm test
```

## Configuration

### Root Configuration

The root configuration is located in `root-mfe/src/codenv-root-config.js` and uses `single-spa-layout` for routing.

### Microfrontend Layout

The layout configuration is defined in `root-mfe/src/microfrontend-layout.html` and includes:

- Main navigation routes
- Microfrontend application registration
- Redirect rules
- Route-based loading

### Import Maps

Each microfrontend uses SystemJS import maps for dependency management, defined in `root-mfe/src/index.ejs`.

## Features by Microfrontend

### Dashboard MFE

- Main application shell
- Navigation and layout
- Route protection and authentication
- Responsive sidebar navigation

### Analytics MFE

- Data visualization and charts
- Real-time analytics
- Report generation
- User analytics and audience insights

### Profile MFE

- User profile management
- Settings and preferences
- Account statistics
- Activity history

### Notifications MFE

- Real-time notifications
- Notification center
- Notification settings
- Quick actions

### Calendar MFE

- Full calendar interface
- Event management
- Schedule planning
- Team collaboration

### Auth MFE

- User authentication
- Login and registration
- Session management
- Password recovery

## Styling

### Tailwind CSS

- Utility-first CSS framework
- Responsive design utilities
- Custom component styles
- Dark mode support

### Component Libraries

- **Headless UI**: Accessible UI components
- **Heroicons**: Beautiful icons
- **React Router**: Client-side routing
- **Single-SPA**: Microfrontend architecture

## Technologies Used

### Frontend

- React 17+
- TypeScript (optional)
- Tailwind CSS
- Headless UI
- Heroicons
- React Router
- Single-SPA
- Single-SPA-React

### Build Tools

- Webpack 5
- Babel
- ESLint
- Prettier
- Concurrently

### Development

- npm scripts
- Hot module replacement
- Code splitting
- Tree shaking

## Deployment

### Docker

```bash
docker-compose up --build
```

### CI/CD

- GitHub Actions for testing
- Automated builds
- Deployment pipelines

## Customization

### Adding New Microfrontends

1. Create a new directory in the project root
2. Add `package.json` with appropriate dependencies
3. Create `src/codenv-<name>-mfe.js` for microfrontend configuration
4. Create `src/root.component.js` for the React component
5. Update `root-mfe/src/microfrontend-layout.html` to include the new route
6. Update `root-mfe/src/index.ejs` import map

### Modifying Styles

- Tailwind CSS configuration in `tailwind.config.js` (if exists)
- Component styles in respective component files
- Global styles in `src/index.css` or similar

### Extending Functionality

- Add new routes in the microfrontend layout
- Create new components in the components directory
- Extend existing components with new features
- Add API integrations

## Troubleshooting

### Common Issues

1. **Port Conflicts**
   - Change ports in package.json files
   - Use different ports for each microfrontend

2. **Build Errors**
   - Check for missing dependencies
   - Verify webpack configuration
   - Clear node_modules and reinstall

3. **Routing Issues**
   - Check basename in BrowserRouter components
   - Verify microfrontend layout configuration
   - Ensure proper route definitions

4. **Authentication Issues**
   - Check token storage and retrieval
   - Verify authentication flow
   - Test login/logout functionality

### Getting Help

- Check the [Single-SPA documentation](https://single-spa.js.org/)
- Visit the [React Router documentation](https://reactrouter.com/)
- Check [Tailwind CSS documentation](https://tailwindcss.com/)
- Join the [Single-SPA community](https://community.single-spa.js.org/)

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Acknowledgements

- Single-SPA team for the microfrontend architecture
- Tailwind CSS team for the utility-first CSS framework
- Heroicons team for beautiful icons
- Headless UI team for accessible components
- React Router team for client-side routing
- All open-source contributors

## Contact

For questions, issues, or feedback:

- GitHub Issues
- Project Maintainers
- Community Forums

---

_Built with ❤️ for modern web applications_
