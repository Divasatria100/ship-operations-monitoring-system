import React, { useState, useEffect } from 'react';
import { 
  Box, Container, Grid, Paper, Typography, Card, CardContent, CardHeader, 
  Avatar, IconButton, Button, Badge, Divider, List, ListItem, ListItemAvatar, 
  ListItemText, ListItemButton, Chip, LinearProgress, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Drawer, AppBar, Toolbar,
  useMediaQuery, Menu, MenuItem, Tooltip, CircularProgress
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import {
  Navigation as NavigationIcon,
  CalendarToday as CalendarIcon,
  Assignment as AssignmentIcon,
  Build as BuildIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  MenuOpen as MenuOpenIcon,
  MoreVert as MoreVertIcon,
  CheckCircle as CheckCircleIcon,
  AccessTime as AccessTimeIcon,
  Warning as WarningIcon,
  ListAlt as ListAltIcon,
  ArrowForward as ArrowForwardIcon,
  Upload as UploadIcon
} from '@mui/icons-material';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, ChartTooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

// Styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  paddingTop: 0,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  width: '100%',
}));

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 12px 0 rgba(0,0,0,0.05)',
  borderRadius: '10px',
  transition: 'all .3s ease-in-out',
  '&:hover': {
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)'
  }
}));

const StatusChip = styled(Chip)(({ theme, status }) => ({
  fontSize: '0.75rem',
  backgroundColor: 
    status === 'Selesai' ? theme.palette.success.light :
    status === 'Dijadwalkan' ? theme.palette.info.light :
    status === 'Berjalan' ? theme.palette.warning.light :
    status === 'Dibatalkan' ? theme.palette.error.light :
    theme.palette.grey[300],
  color: 
    status === 'Selesai' ? theme.palette.success.dark :
    status === 'Dijadwalkan' ? theme.palette.info.dark :
    status === 'Berjalan' ? theme.palette.warning.dark :
    status === 'Dibatalkan' ? theme.palette.error.dark :
    theme.palette.grey[900],
}));

// Mock data
const pendingTasks = [
  { id: 1, title: 'Pemeliharaan Mesin Induk MV Bahari', kapal: 'MV Bahari', tanggal: '2023-05-25', status: 'Berjalan', priority: 'Tinggi' },
  { id: 2, title: 'Pengecekan Sistem Navigasi KM Samudera', kapal: 'KM Samudera', tanggal: '2023-05-27', status: 'Dijadwalkan', priority: 'Menengah' },
  { id: 3, title: 'Pemeliharaan Sistem Kemudi MV Laut Biru', kapal: 'MV Laut Biru', tanggal: '2023-05-30', status: 'Dijadwalkan', priority: 'Rendah' },
];

const recentActivities = [
  { id: 1, activity: 'Penggantian Filter Bahan Bakar', kapal: 'KM Samudera', date: '2023-05-20', status: 'Selesai' },
  { id: 2, activity: 'Perbaikan Sistem Pompa Air Laut', kapal: 'MV Bahari', date: '2023-05-15', status: 'Selesai' },
  { id: 3, activity: 'Pemeriksaan Propeller', kapal: 'KM Samudera', date: '2023-05-10', status: 'Selesai' },
];

const notifications = [
  { id: 1, message: 'Jadwal pemeliharaan baru ditugaskan kepada Anda', time: '10 menit yang lalu', isRead: false },
  { id: 2, message: 'Manajer Armada mengomentari laporan pemeliharaan Anda', time: '2 jam yang lalu', isRead: false },
  { id: 3, message: 'Pemeliharaan MV Bahari disetujui oleh Admin', time: '1 hari yang lalu', isRead: true },
];

// Component
const DashboardTeknisi = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const markAllAsRead = () => {
    setUnreadNotifications(0);
    handleNotificationClose();
  };

  // Chart data
  const taskCompletionData = {
    labels: ['Selesai', 'Dalam Proses', 'Dijadwalkan'],
    datasets: [
      {
        data: [12, 3, 5],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.info.main,
        ],
        borderWidth: 0,
      },
    ],
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
    datasets: [
      {
        label: 'Tugas Selesai Tepat Waktu',
        data: [7, 9, 8, 11, 12],
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main + '20',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    maintainAspectRatio: false,
  };

  // Ship components statuses for health monitoring
  const shipComponents = [
    { name: 'Mesin Utama', health: 85 },
    { name: 'Sistem Kemudi', health: 92 },
    { name: 'Generator', health: 75 },
    { name: 'Sistem Navigasi', health: 95 },
  ];

  // Sidebar content for both drawer and desktop
  const sidebarContent = (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Avatar
          sx={{ 
            width: 64, 
            height: 64, 
            bgcolor: theme.palette.primary.main,
            border: `2px solid ${theme.palette.primary.light}`
          }}
        >
          BT
        </Avatar>
      </Box>
      <Typography variant="body1" align="center" fontWeight="bold" sx={{ mb: 1 }}>
        Budi Teknisi
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 3 }}>
        Teknisi Kapal
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <NavigationIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.grey[300] }}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Tugas Pemeliharaan" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.grey[300] }}>
                <BuildIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Log Pemeliharaan" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.grey[300] }}>
                <ListAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Riwayat Pemeliharaan" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.grey[300] }}>
                <CalendarIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Jadwal" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      {/* App Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          width: '100%'
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuOpenIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" color="primary" fontWeight="bold" sx={{ flexGrow: 1 }}>
            SODIKAP
            <Box component="span" sx={{ color: 'text.primary' }}>
              {' '}| Dashboard Teknisi
            </Box>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              onClick={handleNotificationClick}
              aria-controls="notification-menu" 
              aria-haspopup="true"
            >
              <Badge badgeContent={unreadNotifications} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="notification-menu"
              anchorEl={notificationAnchorEl}
              keepMounted
              open={Boolean(notificationAnchorEl)}
              onClose={handleNotificationClose}
              PaperProps={{
                sx: { width: 350, maxHeight: 400, mt: 1.5 }
              }}
            >
              <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Notifikasi
                </Typography>
                {unreadNotifications > 0 && (
                  <Button size="small" onClick={markAllAsRead}>Tandai semua dibaca</Button>
                )}
              </Box>
              <Divider />
              <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {notifications.map((notification) => (
                  <ListItem 
                    key={notification.id} 
                    sx={{ 
                      backgroundColor: notification.isRead ? 'inherit' : theme.palette.action.hover,
                      borderLeft: notification.isRead ? 'none' : `4px solid ${theme.palette.primary.main}`
                    }}
                  >
                    <ListItemText 
                      primary={notification.message} 
                      secondary={notification.time} 
                      primaryTypographyProps={{ variant: 'body2' }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box sx={{ p: 1, textAlign: 'center' }}>
                <Button size="small" endIcon={<ArrowForwardIcon />}>
                  Lihat Semua Notifikasi
                </Button>
              </Box>
            </Menu>
            <IconButton 
              color="inherit" 
              onClick={handleProfileClick}
              aria-controls="profile-menu" 
              aria-haspopup="true"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>BT</Avatar>
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              keepMounted
              open={Boolean(profileAnchorEl)}
              onClose={handleProfileClose}
              PaperProps={{
                sx: { width: 200, mt: 1.5 }
              }}
            >
              <MenuItem onClick={handleProfileClose}>Profil</MenuItem>
              <MenuItem onClick={handleProfileClose}>Pengaturan</MenuItem>
              <Divider />
              <MenuItem onClick={handleProfileClose}>Keluar</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar for desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { 
              width: 240, 
              boxSizing: 'border-box',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              bgcolor: theme.palette.background.paper
            },
          }}
          open
        >
          <Toolbar />
          {sidebarContent}
        </Drawer>
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': { 
              width: 240, 
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              bgcolor: theme.palette.background.paper
            },
          }}
        >
          <Toolbar />
          {sidebarContent}
        </Drawer>
      )}

      {/* Main content */}
      <DashboardContainer 
        component="main" 
        sx={{ 
          marginLeft: 0,
          width: '100%',
          boxSizing: 'border-box',
          p: 5
        }}
      >
        <Toolbar />
        <Container disableGutters sx={{ maxWidth: 'none', width: '100%', px: 0, mx: 0 }}>
          {/* Welcome Card */}
          <StyledCard sx={{ mb: 3, width: '100%' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom>
                    Selamat Datang, Budi Teknisi!
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    Anda memiliki {pendingTasks.filter(task => task.status === 'Dijadwalkan' || task.status === 'Berjalan').length} tugas pemeliharaan yang perlu diselesaikan. Pantau dan catat semua aktivitas pemeliharaan pada sistem.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      startIcon={<AssignmentIcon />}
                      sx={{ mr: 2, borderRadius: '8px' }}
                    >
                      Lihat Tugas
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      startIcon={<BuildIcon />}
                      sx={{ borderRadius: '8px' }}
                    >
                      Catat Aktivitas
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>

          {/* Summary Cards */}
          <Grid container spacing={3} sx={{ mb: 3, width: '100%' }}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                  <Avatar sx={{ bgcolor: theme.palette.warning.light, width: 56, height: 56 }}>
                    <AccessTimeIcon fontSize="large" sx={{ color: theme.palette.warning.dark }} />
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body2" color="textSecondary">Tugas Menunggu</Typography>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {pendingTasks.filter(task => task.status === 'Dijadwalkan').length}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                  <Avatar sx={{ bgcolor: theme.palette.info.light, width: 56, height: 56 }}>
                    <BuildIcon fontSize="large" sx={{ color: theme.palette.info.dark }} />
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body2" color="textSecondary">Tugas Berjalan</Typography>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {pendingTasks.filter(task => task.status === 'Berjalan').length}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
                  <Avatar sx={{ bgcolor: theme.palette.success.light, width: 56, height: 56 }}>
                    <CheckCircleIcon fontSize="large" sx={{ color: theme.palette.success.dark }} />
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body2" color="textSecondary">Tugas Selesai (Bulan Ini)</Typography>
                    <Typography variant="h4" component="div" fontWeight="bold">12</Typography>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ width: '100%' }}>
            {/* Pending Tasks Table */}
            <Grid item xs={12}>
              <StyledCard>
                <CardHeader 
                  title="Tugas Pemeliharaan Yang Perlu Diselesaikan" 
                  action={
                    <Button 
                      size="small" 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: 'medium' }}
                    >
                      Lihat Semua
                    </Button>
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Kapal</TableCell>
                          <TableCell>Tugas</TableCell>
                          <TableCell>Jadwal</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Prioritas</TableCell>
                          <TableCell align="right">Aksi</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pendingTasks.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell>{task.kapal}</TableCell>
                            <TableCell>{task.title}</TableCell>
                            <TableCell>{task.tanggal}</TableCell>
                            <TableCell>
                              <StatusChip label={task.status} status={task.status} size="small" />
                            </TableCell>
                            <TableCell>
                              <Chip 
                                size="small" 
                                label={task.priority} 
                                sx={{ 
                                  bgcolor: 
                                    task.priority === 'Tinggi' ? '#FEE2E2' : 
                                    task.priority === 'Menengah' ? '#FEF3C7' : 
                                    '#DBEAFE',
                                  color: 
                                    task.priority === 'Tinggi' ? '#B91C1C' : 
                                    task.priority === 'Menengah' ? '#B45309' : 
                                    '#1E40AF',
                                  fontWeight: 500,
                                  fontSize: '0.75rem'
                                }} 
                              />
                            </TableCell>
                            <TableCell align="right">
                              <Button 
                                variant="outlined" 
                                size="small"
                                endIcon={<UploadIcon />}
                                sx={{ borderRadius: '8px' }}
                              >
                                Catat
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Performance Stats */}
            <Grid item xs={12}>
              <Grid container spacing={3} sx={{ width: '100%' }}>
                <Grid item xs={12}>
                  <StyledCard>
                    <CardHeader title="Penyelesaian Tugas" />
                    <CardContent>
                      <Box height={200} sx={{ position: 'relative' }}>
                        <Doughnut data={taskCompletionData} options={chartOptions} />
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
                <Grid item xs={12}>
                  <StyledCard>
                    <CardHeader title="Kinerja Bulanan" />
                    <CardContent>
                      <Box height={200}>
                        <Line data={performanceData} options={chartOptions} />
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              </Grid>
            </Grid>

            {/* Recent Activities */}
            <Grid item xs={12}>
              <StyledCard sx={{ height: '100%' }}>
                <CardHeader 
                  title="Aktivitas Terbaru" 
                  action={
                    <Button 
                      size="small" 
                      endIcon={<ArrowForwardIcon />}
                    >
                      Lihat Semua
                    </Button>
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <List>
                    {recentActivities.map((activity) => (
                      <React.Fragment key={activity.id}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.success.light }}>
                              <CheckCircleIcon sx={{ color: theme.palette.success.dark }} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={activity.activity}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {activity.kapal}
                                </Typography>
                                {` — ${activity.date}`}
                              </React.Fragment>
                            }
                          />
                          <StatusChip label={activity.status} status={activity.status} size="small" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    ))}
                  </List>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Ship Health Monitoring */}
            <Grid item xs={12}>
              <StyledCard sx={{ height: '100%' }}>
                <CardHeader 
                  title="Kondisi Komponen Kapal" 
                  subheader="Pantau kondisi komponen penting kapal"
                />
                <CardContent>
                  {shipComponents.map((component) => (
                    <Box key={component.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">{component.name}</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          {component.health}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={component.health} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          backgroundColor: theme.palette.grey[200],
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            backgroundColor: 
                              component.health > 90 ? theme.palette.success.main :
                              component.health > 70 ? theme.palette.info.main :
                              component.health > 50 ? theme.palette.warning.main :
                              theme.palette.error.main
                          }
                        }} 
                      />
                    </Box>
                  ))}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      endIcon={<ArrowForwardIcon />}
                    >
                      Detail Kondisi Kapal
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </DashboardContainer>
    </Box>
  );
};

export default DashboardTeknisi;
