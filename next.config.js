/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "vjqisxpqadwrochbwgks.supabase.co"
        ]
    }
}
// domain added to allow images to be accessed to fix 'invalid src prop'

module.exports = nextConfig
