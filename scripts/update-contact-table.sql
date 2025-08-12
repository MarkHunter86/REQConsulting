-- Add status and notes fields to contact_submissions table
DO $$ 
BEGIN
    -- Add status column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'status') THEN
        ALTER TABLE contact_submissions ADD COLUMN status TEXT DEFAULT 'new';
    END IF;
    
    -- Add notes column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'contact_submissions' AND column_name = 'notes') THEN
        ALTER TABLE contact_submissions ADD COLUMN notes TEXT;
    END IF;
END $$;

-- Update existing records to have 'new' status if they don't have one
UPDATE contact_submissions SET status = 'new' WHERE status IS NULL;
