package careernavigator;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "*")
public class ResumeController {

    @PostMapping("/analyze")
    public Map<String, Object> analyzeResume(@RequestParam("file") MultipartFile file) {

        List<String> foundSkills = new ArrayList<>();
        List<String> feedback = new ArrayList<>();
        int atsScore = 0;

        try {
            PDDocument document = Loader.loadPDF(file.getBytes());

            PDFTextStripper stripper = new PDFTextStripper();
            String text = stripper.getText(document).toLowerCase();

            document.close();

            String[] skills = {
                    "java", "html", "css", "javascript", "react",
                    "spring boot", "mysql", "git", "python", "c", "c++"
            };

            for (String skill : skills) {
                if (text.contains(skill.toLowerCase())) {
                    foundSkills.add(skill);
                }
            }

            atsScore += Math.min(foundSkills.size() * 8, 50);

            if (text.matches("(?s).*\\b[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}\\b.*")) {
                atsScore += 10;
                feedback.add("Email found");
            } else {
                feedback.add("Add email address");
            }

            if (text.matches("(?s).*\\b\\d{10}\\b.*")) {
                atsScore += 10;
                feedback.add("Phone number found");
            } else {
                feedback.add("Add phone number");
            }

            if (text.contains("education")) {
                atsScore += 10;
                feedback.add("Education section found");
            } else {
                feedback.add("Add education section");
            }

            if (text.contains("project") || text.contains("projects")) {
                atsScore += 10;
                feedback.add("Project section found");
            } else {
                feedback.add("Add projects section");
            }

            if (text.contains("experience") || text.contains("internship")) {
                atsScore += 10;
                feedback.add("Experience/Internship section found");
            } else {
                feedback.add("Add experience or internship section");
            }

        } catch (Exception e) {
            feedback.add("Could not analyze resume");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("foundSkills", foundSkills);
        response.put("atsScore", atsScore);
        response.put("feedback", feedback);

        return response;
    }
}