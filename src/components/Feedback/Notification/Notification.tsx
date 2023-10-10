interface NotificationType {
  message: string;
}

export const Notification = ({ message }: NotificationType) => {
  return <p>{message}</p>;
};
