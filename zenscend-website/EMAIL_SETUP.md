# Email Setup Instructions

## Contact Form Email Configuration

The contact form on the website uses **Resend** to send emails to my email address.

### Setup Steps:

1. **Create a Resend Account**
   - Go to [https://resend.com](https://resend.com)
   - Sign up for a free account

2. **Get Your API Key**
   - Navigate to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Create a new API key
   - Copy the API key (starts with `re_`)

3. **Configure Environment Variable**
   - Open `.env.local` file
   - Replace `re_YOUR_API_KEY_HERE` with your actual Resend API key
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Domain Verification (Production)**
   - To send emails from `@zenscend.co` addresses:
     - Add and verify your domain in Resend dashboard
     - Follow their DNS configuration instructions
   - For testing, the form currently uses `onboarding@resend.dev` as the sender

5. **Update Sender Email (Optional)**
   - Once domain is verified, update `/app/api/contact/route.ts`:
   - Change `from: 'Zenscend Contact Form <onboarding@resend.dev>'`
   - To: `from: 'Zenscend Contact Form <noreply@zenscend.co>'`

### Testing the Form

1. Start the development server: `npm run dev`
2. Navigate to the contact section on the homepage
3. Fill out the form with test data
4. Submit and check the console for any errors
5. Verify email arrives at `bongani@zenscend.co`

### Production Deployment (Vercel)

1. Add the `RESEND_API_KEY` environment variable in Vercel:
   - Go to your project settings in Vercel
   - Navigate to Environment Variables
   - Add `RESEND_API_KEY` with your production API key

### Free Tier Limits
- Resend free tier: 100 emails per day
- Sufficient for contact form usage

### Troubleshooting

- **Email not sending**: Check API key is correctly set in `.env.local`
- **403 Error**: Verify API key has correct permissions
- **Domain verification**: Check DNS records match Resend requirements