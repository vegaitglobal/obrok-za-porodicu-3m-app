using MimeKit;

namespace MealForFamily.Models
{
    public class Message
    {
        private readonly string MAILBOX_NAME = "3M Obrok za porodicu";
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public Message(IEnumerable<string> to, string subject, string content)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(x => new MailboxAddress(MAILBOX_NAME, x)));
            Subject = subject;
            Content = content;
        }
    }
}